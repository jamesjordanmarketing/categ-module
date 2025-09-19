import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Document {
  id: string;
  title: string;
  content: string;
  summary: string;
  createdAt: string;
  authorId: string;
  status: 'pending' | 'categorizing' | 'completed';
}

export interface CategorySelection {
  id: string;
  name: string;
  description: string;
  examples: string[];
  isHighValue: boolean;
  impact: string;
  detailedDescription?: string;
  processingStrategy?: string;
  businessValueClassification?: string;
  usageAnalytics?: {
    totalSelections: number;
    recentActivity: number;
  };
  valueDistribution?: {
    highValue: number;
    mediumValue: number;
    standardValue: number;
  };
}

export interface TagDimension {
  id: string;
  name: string;
  description: string;
  tags: Tag[];
  multiSelect: boolean;
  required: boolean;
}

export interface Tag {
  id: string;
  name: string;
  description: string;
  icon?: string;
  riskLevel?: number;
}

export interface WorkflowState {
  // Current workflow state
  currentStep: 'A' | 'B' | 'C' | 'complete';
  currentDocument: Document | null;
  
  // Step A: Statement of Belonging
  belongingRating: number | null;
  
  // Step B: Primary Category Selection
  selectedCategory: CategorySelection | null;
  
  // Step C: Secondary Tags
  selectedTags: Record<string, string[]>;
  customTags: Tag[];
  
  // Progress and validation
  completedSteps: string[];
  validationErrors: Record<string, string>;
  isDraft: boolean;
  lastSaved: string | null;
  
  // Actions
  setCurrentDocument: (document: Document) => void;
  setCurrentStep: (step: 'A' | 'B' | 'C' | 'complete') => void;
  setBelongingRating: (rating: number) => void;
  setSelectedCategory: (category: CategorySelection) => void;
  setSelectedTags: (dimensionId: string, tags: string[]) => void;
  addCustomTag: (dimensionId: string, tag: Tag) => void;
  markStepComplete: (step: string) => void;
  validateStep: (step: string) => boolean;
  saveDraft: () => void;
  resetWorkflow: () => void;
  submitWorkflow: () => Promise<void>;
}

export const useWorkflowStore = create<WorkflowState>()(
  persist(
    (set, get) => ({
      // Initial state
      currentStep: 'A',
      currentDocument: null,
      belongingRating: null,
      selectedCategory: null,
      selectedTags: {},
      customTags: [],
      completedSteps: [],
      validationErrors: {},
      isDraft: false,
      lastSaved: null,

      // Actions
      setCurrentDocument: (document) => {
        set({ currentDocument: document, currentStep: 'A' });
      },

      setCurrentStep: (step) => {
        set({ currentStep: step });
      },

      setBelongingRating: (rating) => {
        set({ belongingRating: rating, isDraft: true });
        get().saveDraft();
      },

      setSelectedCategory: (category) => {
        set({ selectedCategory: category, isDraft: true });
        get().saveDraft();
      },

      setSelectedTags: (dimensionId, tags) => {
        const selectedTags = { ...get().selectedTags };
        selectedTags[dimensionId] = tags;
        set({ selectedTags, isDraft: true });
        get().saveDraft();
      },

      addCustomTag: (dimensionId, tag) => {
        const customTags = [...get().customTags, tag];
        const selectedTags = { ...get().selectedTags };
        if (!selectedTags[dimensionId]) {
          selectedTags[dimensionId] = [];
        }
        selectedTags[dimensionId].push(tag.id);
        set({ customTags, selectedTags, isDraft: true });
        get().saveDraft();
      },

      markStepComplete: (step) => {
        const completedSteps = [...get().completedSteps];
        if (!completedSteps.includes(step)) {
          completedSteps.push(step);
        }
        set({ completedSteps });
      },

      validateStep: (step) => {
        const state = get();
        const errors: Record<string, string> = {};

        switch (step) {
          case 'A':
            if (state.belongingRating === null) {
              errors.belongingRating = 'Please provide a relationship rating';
            }
            break;
          case 'B':
            if (!state.selectedCategory) {
              errors.selectedCategory = 'Please select a primary category';
            }
            break;
          case 'C':
            // Check required tag dimensions
            const requiredDimensions = ['authorship', 'disclosure-risk', 'intended-use'];
            requiredDimensions.forEach(dim => {
              if (!state.selectedTags[dim] || state.selectedTags[dim].length === 0) {
                errors[dim] = `Please select at least one ${dim.replace('-', ' ')} tag`;
              }
            });
            break;
        }

        set({ validationErrors: errors });
        return Object.keys(errors).length === 0;
      },

      saveDraft: () => {
        set({ 
          isDraft: true, 
          lastSaved: new Date().toISOString() 
        });
      },

      resetWorkflow: () => {
        set({
          currentStep: 'A',
          belongingRating: null,
          selectedCategory: null,
          selectedTags: {},
          customTags: [],
          completedSteps: [],
          validationErrors: {},
          isDraft: false,
          lastSaved: null,
        });
      },

      submitWorkflow: async () => {
        const state = get();
        
        // Simulate API submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Mark as complete
        set({ 
          currentStep: 'complete',
          isDraft: false,
          completedSteps: ['A', 'B', 'C'],
          lastSaved: new Date().toISOString()
        });
      },
    }),
    {
      name: 'document-workflow-storage',
      partialize: (state) => ({
        currentDocument: state.currentDocument,
        belongingRating: state.belongingRating,
        selectedCategory: state.selectedCategory,
        selectedTags: state.selectedTags,
        customTags: state.customTags,
        completedSteps: state.completedSteps,
        isDraft: state.isDraft,
        lastSaved: state.lastSaved,
      }),
    }
  )
);