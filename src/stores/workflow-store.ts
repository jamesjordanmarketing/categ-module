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
  saveDraft: () => Promise<void>;
  resetWorkflow: () => void;
  submitWorkflow: () => Promise<void>;
  loadExistingWorkflow: (documentId: string) => Promise<void>;
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
        // Call async saveDraft but don't await to avoid blocking
        get().saveDraft().catch(error => console.error('Auto-save failed:', error));
      },

      setSelectedCategory: (category) => {
        set({ selectedCategory: category, isDraft: true });
        // Call async saveDraft but don't await to avoid blocking
        get().saveDraft().catch(error => console.error('Auto-save failed:', error));
      },

      setSelectedTags: (dimensionId, tags) => {
        const selectedTags = { ...get().selectedTags };
        selectedTags[dimensionId] = tags;
        set({ selectedTags, isDraft: true });
        // Call async saveDraft but don't await to avoid blocking
        get().saveDraft().catch(error => console.error('Auto-save failed:', error));
      },

      addCustomTag: (dimensionId, tag) => {
        const customTags = [...get().customTags, tag];
        const selectedTags = { ...get().selectedTags };
        if (!selectedTags[dimensionId]) {
          selectedTags[dimensionId] = [];
        }
        selectedTags[dimensionId].push(tag.id);
        set({ customTags, selectedTags, isDraft: true });
        // Call async saveDraft but don't await to avoid blocking
        get().saveDraft().catch(error => console.error('Auto-save failed:', error));
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

      saveDraft: async () => {
        const state = get();
        
        try {
          // Get auth token from Supabase auth
          let token = null;
          try {
            const { supabase } = await import('../lib/supabase');
            const { data: { session } } = await supabase.auth.getSession();
            token = session?.access_token;
          } catch (e) {
            console.warn('Could not get auth token from Supabase session');
          }
          
          if (!token) {
            console.warn('User not authenticated, cannot save draft');
            return;
          }
          
          // Make real API call to save draft
          const response = await fetch('/api/workflow', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ 
              action: 'save_draft',
              documentId: state.currentDocument?.id,
              belongingRating: state.belongingRating,
              selectedCategory: state.selectedCategory,
              selectedTags: state.selectedTags,
              customTags: state.customTags,
              step: state.currentStep
            })
          });

          if (response.ok) {
            const data = await response.json();
            if (data.success) {
              set({ 
                isDraft: true, 
                lastSaved: new Date().toISOString() 
              });
            }
          } else {
            console.error('Failed to save draft');
          }
        } catch (error) {
          console.error('Error saving draft:', error);
        }
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
        
        try {
          // Get auth token from Supabase auth
          let token = null;
          try {
            const { supabase } = await import('../lib/supabase');
            const { data: { session } } = await supabase.auth.getSession();
            token = session?.access_token;
          } catch (e) {
            console.warn('Could not get auth token from Supabase session');
          }
          
          if (!token) {
            throw new Error('User not authenticated');
          }
        
          // Make real API call to submit workflow
          const response = await fetch('/api/workflow', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ 
              action: 'submit',
              documentId: state.currentDocument?.id,
              belongingRating: state.belongingRating,
              selectedCategory: state.selectedCategory,
              selectedTags: state.selectedTags,
              customTags: state.customTags,
              step: state.currentStep
            })
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to submit workflow');
          }

          const data = await response.json();
          
          if (data.success) {
            // Mark as complete
            set({ 
              currentStep: 'complete',
              isDraft: false,
              completedSteps: ['A', 'B', 'C'],
              lastSaved: new Date().toISOString()
            });
          } else {
            throw new Error(data.error || 'Submission failed');
          }
        } catch (error) {
          console.error('Failed to submit workflow:', error);
          throw error;
        }
      },

      loadExistingWorkflow: async (documentId: string) => {
        try {
          // Get auth token from Supabase auth
          let token = null;
          try {
            const { supabase } = await import('../lib/supabase');
            const { data: { session } } = await supabase.auth.getSession();
            token = session?.access_token;
          } catch (e) {
            console.warn('Could not get auth token from Supabase session');
          }
          
          if (!token) {
            console.warn('User not authenticated, cannot load existing workflow');
            return;
          }
          
          // Check if there's an existing workflow session for this document
          const response = await fetch(`/api/workflow/session?documentId=${documentId}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });

          if (response.ok) {
            const data = await response.json();
            if (data.success && data.session) {
              const session = data.session;
              // Load the existing workflow state
              set({
                currentStep: session.step as 'A' | 'B' | 'C' | 'complete',
                belongingRating: session.belonging_rating,
                selectedCategory: session.selected_category_id ? {
                  id: session.selected_category_id,
                  // We'd need to fetch category details, for now just use basic info
                  name: 'Loaded Category',
                  description: '',
                  examples: [],
                  isHighValue: false,
                  impact: ''
                } : null,
                selectedTags: session.selected_tags || {},
                customTags: session.custom_tags || [],
                completedSteps: session.completed_steps || [],
                isDraft: session.is_draft,
                lastSaved: session.updated_at
              });
            }
          }
        } catch (error) {
          console.error('Error loading existing workflow:', error);
        }
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