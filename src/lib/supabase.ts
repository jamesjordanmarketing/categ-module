import { createClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from '../utils/supabase/info';

const supabaseUrl = `https://${projectId}.supabase.co`;
const supabaseKey = publicAnonKey;

export const supabase = createClient(supabaseUrl, supabaseKey);

export type Database = {
  public: {
    Tables: {
      documents: {
        Row: {
          id: string;
          title: string;
          content: string | null;
          summary: string | null;
          created_at: string;
          updated_at: string;
          author_id: string;
          status: 'pending' | 'categorizing' | 'completed';
          file_path: string | null;
          file_size: number | null;
          metadata: Record<string, any> | null;
        };
        Insert: {
          id?: string;
          title: string;
          content?: string | null;
          summary?: string | null;
          created_at?: string;
          updated_at?: string;
          author_id: string;
          status?: 'pending' | 'categorizing' | 'completed';
          file_path?: string | null;
          file_size?: number | null;
          metadata?: Record<string, any> | null;
        };
        Update: {
          id?: string;
          title?: string;
          content?: string | null;
          summary?: string | null;
          created_at?: string;
          updated_at?: string;
          author_id?: string;
          status?: 'pending' | 'categorizing' | 'completed';
          file_path?: string | null;
          file_size?: number | null;
          metadata?: Record<string, any> | null;
        };
      };
      workflow_sessions: {
        Row: {
          id: string;
          document_id: string;
          user_id: string;
          step: 'A' | 'B' | 'C' | 'complete';
          belonging_rating: number | null;
          selected_category_id: string | null;
          selected_tags: Record<string, string[]>;
          custom_tags: any[];
          is_draft: boolean;
          completed_steps: string[];
          created_at: string;
          updated_at: string;
          completed_at: string | null;
        };
        Insert: {
          id?: string;
          document_id: string;
          user_id: string;
          step?: 'A' | 'B' | 'C' | 'complete';
          belonging_rating?: number | null;
          selected_category_id?: string | null;
          selected_tags?: Record<string, string[]>;
          custom_tags?: any[];
          is_draft?: boolean;
          completed_steps?: string[];
          created_at?: string;
          updated_at?: string;
          completed_at?: string | null;
        };
        Update: {
          id?: string;
          document_id?: string;
          user_id?: string;
          step?: 'A' | 'B' | 'C' | 'complete';
          belonging_rating?: number | null;
          selected_category_id?: string | null;
          selected_tags?: Record<string, string[]>;
          custom_tags?: any[];
          is_draft?: boolean;
          completed_steps?: string[];
          created_at?: string;
          updated_at?: string;
          completed_at?: string | null;
        };
      };
      categories: {
        Row: {
          id: string;
          name: string;
          description: string;
          examples: string[];
          is_high_value: boolean;
          impact_description: string;
          sort_order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description: string;
          examples: string[];
          is_high_value?: boolean;
          impact_description: string;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string;
          examples?: string[];
          is_high_value?: boolean;
          impact_description?: string;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      tag_dimensions: {
        Row: {
          id: string;
          name: string;
          description: string;
          multi_select: boolean;
          required: boolean;
          sort_order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description: string;
          multi_select?: boolean;
          required?: boolean;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string;
          multi_select?: boolean;
          required?: boolean;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      tags: {
        Row: {
          id: string;
          dimension_id: string;
          name: string;
          description: string;
          icon: string | null;
          risk_level: number | null;
          sort_order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          dimension_id: string;
          name: string;
          description: string;
          icon?: string | null;
          risk_level?: number | null;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          dimension_id?: string;
          name?: string;
          description?: string;
          icon?: string | null;
          risk_level?: number | null;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
};