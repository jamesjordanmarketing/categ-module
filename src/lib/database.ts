import { supabase } from './supabase';
import { Document, CategorySelection, TagDimension } from '../stores/workflow-store';

// Document operations
export const documentService = {
  async getAll() {
    const { data, error } = await supabase
      .from('documents')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  async getById(id: string) {
    const { data, error } = await supabase
      .from('documents')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },

  async create(document: Partial<Document>) {
    const { data, error } = await supabase
      .from('documents')
      .insert(document)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async update(id: string, updates: Partial<Document>) {
    const { data, error } = await supabase
      .from('documents')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }
};

// Category operations
export const categoryService = {
  async getAll() {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('sort_order', { ascending: true });
    
    if (error) throw error;
    return data;
  },

  async getById(id: string) {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  }
};

// Tag operations
export const tagService = {
  async getDimensions() {
    const { data, error } = await supabase
      .from('tag_dimensions')
      .select(`
        *,
        tags (*)
      `)
      .order('sort_order', { ascending: true });
    
    if (error) throw error;
    return data;
  },

  async getTagsByDimension(dimensionId: string) {
    const { data, error } = await supabase
      .from('tags')
      .select('*')
      .eq('dimension_id', dimensionId)
      .order('sort_order', { ascending: true });
    
    if (error) throw error;
    return data;
  }
};

// Workflow session operations
export const workflowService = {
  async createSession(documentId: string, userId: string) {
    const { data, error } = await supabase
      .from('workflow_sessions')
      .insert({
        document_id: documentId,
        user_id: userId,
        step: 'A',
        selected_tags: {},
        custom_tags: [],
        is_draft: true,
        completed_steps: []
      })
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async getSession(documentId: string, userId: string) {
    const { data, error } = await supabase
      .from('workflow_sessions')
      .select('*')
      .eq('document_id', documentId)
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();
    
    if (error && error.code !== 'PGRST116') throw error;
    return data;
  },

  async updateSession(sessionId: string, updates: any) {
    const { data, error } = await supabase
      .from('workflow_sessions')
      .update({
        ...updates,
        updated_at: new Date().toISOString()
      })
      .eq('id', sessionId)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async completeSession(sessionId: string, finalData: any) {
    const { data, error } = await supabase
      .from('workflow_sessions')
      .update({
        ...finalData,
        step: 'complete',
        is_draft: false,
        completed_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
      .eq('id', sessionId)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }
};

// Analytics and reporting
export const analyticsService = {
  async getWorkflowStats() {
    const { data: documents, error: docError } = await supabase
      .from('documents')
      .select('status');
    
    if (docError) throw docError;

    const { data: sessions, error: sessionError } = await supabase
      .from('workflow_sessions')
      .select('step, is_draft, completed_at');
    
    if (sessionError) throw sessionError;

    return {
      totalDocuments: documents.length,
      pendingDocuments: documents.filter(d => d.status === 'pending').length,
      inProgressDocuments: documents.filter(d => d.status === 'categorizing').length,
      completedDocuments: documents.filter(d => d.status === 'completed').length,
      totalSessions: sessions.length,
      completedSessions: sessions.filter(s => !s.is_draft).length,
      averageCompletionTime: this.calculateAverageCompletionTime(sessions.filter(s => s.completed_at))
    };
  },

  calculateAverageCompletionTime(completedSessions: any[]) {
    if (completedSessions.length === 0) return 0;
    
    const totalTime = completedSessions.reduce((acc, session) => {
      const start = new Date(session.created_at).getTime();
      const end = new Date(session.completed_at).getTime();
      return acc + (end - start);
    }, 0);
    
    return Math.round(totalTime / completedSessions.length / (1000 * 60)); // minutes
  }
};

// User authentication and profile
export const userService = {
  async getCurrentUser() {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) throw error;
    return user;
  },

  async getUserProfile(userId: string) {
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', userId)
      .single();
    
    if (error) throw error;
    return data;
  },

  async updateUserPreferences(userId: string, preferences: Record<string, any>) {
    const { data, error } = await supabase
      .from('user_profiles')
      .update({ 
        preferences,
        updated_at: new Date().toISOString()
      })
      .eq('id', userId)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }
};

// File upload and storage
export const fileService = {
  async uploadDocument(file: File, userId: string) {
    const fileName = `${userId}/${Date.now()}-${file.name}`;
    
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('documents')
      .upload(fileName, file);
    
    if (uploadError) throw uploadError;

    // Create document record
    const { data: documentData, error: documentError } = await supabase
      .from('documents')
      .insert({
        title: file.name.replace(/\.[^/.]+$/, ''), // Remove file extension
        file_path: uploadData.path,
        file_size: file.size,
        author_id: userId,
        status: 'pending'
      })
      .select()
      .single();
    
    if (documentError) throw documentError;
    return documentData;
  },

  async downloadDocument(path: string) {
    const { data, error } = await supabase.storage
      .from('documents')
      .download(path);
    
    if (error) throw error;
    return data;
  }
};

// Initialize database with mock data (for development)
export const initializeDatabase = async () => {
  try {
    // Check if categories exist
    const { data: existingCategories } = await supabase
      .from('categories')
      .select('id')
      .limit(1);
    
    if (!existingCategories || existingCategories.length === 0) {
      console.log('Initializing database with mock data...');
      
      // Note: In a real environment, this would be handled by migrations
      // For this MVP, we're using the mock data from our local files
      console.log('Database initialization complete (using local mock data)');
    }
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};