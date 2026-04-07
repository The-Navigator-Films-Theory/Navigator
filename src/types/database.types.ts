export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          extensions?: Json
          operationName?: string
          query?: string
          variables?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      admin_users: {
        Row: {
          user_id: string
        }
        Insert: {
          user_id: string
        }
        Update: {
          user_id?: string
        }
        Relationships: []
      }
      user_engagement: {
        Row: {
          id: string
          user_id: string | null
          event_type: string
          related_id: string | null
          related_type: string | null
          metadata: Json | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          event_type: string
          related_id?: string | null
          related_type?: string | null
          metadata?: Json | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          event_type?: string
          related_id?: string | null
          related_type?: string | null
          metadata?: Json | null
          created_at?: string
        }
        Relationships: []
      }
      analysis_templates: {
        Row: {
          created_at: string
          created_by: string | null
          id: string
          published_at: string | null
          status: string
          template_body: Json
          theory_id: string
          title: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: string
          published_at?: string | null
          status?: string
          template_body?: Json
          theory_id: string
          title: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: string
          published_at?: string | null
          status?: string
          template_body?: Json
          theory_id?: string
          title?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "analysis_templates_theory_id_fkey"
            columns: ["theory_id"]
            isOneToOne: false
            referencedRelation: "theories"
            referencedColumns: ["id"]
          },
        ]
      }
      citations: {
        Row: {
          academic_significance: string | null
          author: string | null
          created_at: string | null
          critiques: string[] | null
          description: string | null
          id: string
          journal: string | null
          key_concepts_explained: Json | null
          key_quotes: string[] | null
          pages: string | null
          publisher: string | null
          status: string | null
          theory_ids: string[] | null
          title: string
          type: string | null
          updated_at: string | null
          year: number | null
        }
        Insert: {
          academic_significance?: string | null
          author?: string | null
          created_at?: string | null
          critiques?: string[] | null
          description?: string | null
          id: string
          journal?: string | null
          key_concepts_explained?: Json | null
          key_quotes?: string[] | null
          pages?: string | null
          publisher?: string | null
          status?: string | null
          theory_ids?: string[] | null
          title: string
          type?: string | null
          updated_at?: string | null
          year?: number | null
        }
        Update: {
          academic_significance?: string | null
          author?: string | null
          created_at?: string | null
          critiques?: string[] | null
          description?: string | null
          id?: string
          journal?: string | null
          key_concepts_explained?: Json | null
          key_quotes?: string[] | null
          pages?: string | null
          publisher?: string | null
          status?: string | null
          theory_ids?: string[] | null
          title?: string
          type?: string | null
          updated_at?: string | null
          year?: number | null
        }
        Relationships: []
      }
      film_theory_map: {
        Row: {
          film_id: string
          theory_id: string
        }
        Insert: {
          film_id: string
          theory_id: string
        }
        Update: {
          film_id?: string
          theory_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "film_theory_map_film_id_fkey"
            columns: ["film_id"]
            isOneToOne: false
            referencedRelation: "films"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "film_theory_map_theory_id_fkey"
            columns: ["theory_id"]
            isOneToOne: false
            referencedRelation: "theories"
            referencedColumns: ["id"]
          },
        ]
      }
      films: {
        Row: {
          created_at: string
          director: string | null
          film_id: string | null
          id: string
          poster_url: string | null
          relevant_theories: string[] | null
          synopsis: string | null
          title: string
          updated_at: string
          year: number | null
        }
        Insert: {
          created_at?: string
          director?: string | null
          film_id?: string | null
          id?: string
          poster_url?: string | null
          relevant_theories?: string[] | null
          synopsis?: string | null
          title: string
          updated_at?: string
          year?: number | null
        }
        Update: {
          created_at?: string
          director?: string | null
          film_id?: string | null
          id?: string
          poster_url?: string | null
          relevant_theories?: string[] | null
          synopsis?: string | null
          title?: string
          updated_at?: string
          year?: number | null
        }
        Relationships: []
      }
      quiz_answers: {
        Row: {
          attempt_id: string
          is_correct: boolean | null
          question_id: string
          selected_option: string | null
        }
        Insert: {
          attempt_id: string
          is_correct?: boolean | null
          question_id: string
          selected_option?: string | null
        }
        Update: {
          attempt_id?: string
          is_correct?: boolean | null
          question_id?: string
          selected_option?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "quiz_answers_attempt_id_fkey"
            columns: ["attempt_id"]
            isOneToOne: false
            referencedRelation: "quiz_attempts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quiz_answers_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "quiz_questions"
            referencedColumns: ["id"]
          },
        ]
      }
      quiz_attempts: {
        Row: {
          completed_at: string | null
          id: string
          percent: number | null
          quiz_id: string
          score: number | null
          started_at: string
          total_questions: number | null
          user_id: string | null
        }
        Insert: {
          completed_at?: string | null
          id?: string
          percent?: number | null
          quiz_id: string
          score?: number | null
          started_at?: string
          total_questions?: number | null
          user_id?: string | null
        }
        Update: {
          completed_at?: string | null
          id?: string
          percent?: number | null
          quiz_id?: string
          score?: number | null
          started_at?: string
          total_questions?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "quiz_attempts_quiz_id_fkey"
            columns: ["quiz_id"]
            isOneToOne: false
            referencedRelation: "quizzes"
            referencedColumns: ["id"]
          },
        ]
      }
      quiz_questions: {
        Row: {
          correct_option: string
          created_at: string
          explanation: string | null
          id: string
          option_a: string
          option_b: string
          option_c: string
          option_d: string
          question_text: string
          quiz_id: string
          updated_at: string
        }
        Insert: {
          correct_option: string
          created_at?: string
          explanation?: string | null
          id?: string
          option_a: string
          option_b: string
          option_c: string
          option_d: string
          question_text: string
          quiz_id: string
          updated_at?: string
        }
        Update: {
          correct_option?: string
          created_at?: string
          explanation?: string | null
          id?: string
          option_a?: string
          option_b?: string
          option_c?: string
          option_d?: string
          question_text?: string
          quiz_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "quiz_questions_quiz_id_fkey"
            columns: ["quiz_id"]
            isOneToOne: false
            referencedRelation: "quizzes"
            referencedColumns: ["id"]
          },
        ]
      }
      quizzes: {
        Row: {
          created_at: string
          created_by: string | null
          description: string | null
          difficulty: string | null
          id: string
          published_at: string | null
          status: string
          title: string
          topic: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          description?: string | null
          difficulty?: string | null
          id?: string
          published_at?: string | null
          status?: string
          title: string
          topic: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          description?: string | null
          difficulty?: string | null
          id?: string
          published_at?: string | null
          status?: string
          title?: string
          topic?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      theories: {
        Row: {
          category: string | null
          citations: Json | null
          color: string | null
          created_at: string
          created_by: string | null
          description: string | null
          history: string | null
          id: string
          key_points: Json | null
          key_thinkers: Json | null
          overview: string | null
          published_at: string | null
          representative_films: Json | null
          slug: string
          status: string
          title: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          category?: string | null
          citations?: Json | null
          color?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          history?: string | null
          id?: string
          key_points?: Json | null
          key_thinkers?: Json | null
          overview?: string | null
          published_at?: string | null
          representative_films?: Json | null
          slug: string
          status?: string
          title: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          category?: string | null
          citations?: Json | null
          color?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          history?: string | null
          id?: string
          key_points?: Json | null
          key_thinkers?: Json | null
          overview?: string | null
          published_at?: string | null
          representative_films?: Json | null
          slug?: string
          status?: string
          title?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      theorists: {
        Row: {
          associated_theories: string[] | null
          bio: string | null
          birth_year: number | null
          created_at: string | null
          death_year: number | null
          id: string
          image: string | null
          key_contributions: string[] | null
          key_works: string[] | null
          name: string
          nationality: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          associated_theories?: string[] | null
          bio?: string | null
          birth_year?: number | null
          created_at?: string | null
          death_year?: number | null
          id: string
          image?: string | null
          key_contributions?: string[] | null
          key_works?: string[] | null
          name: string
          nationality?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          associated_theories?: string[] | null
          bio?: string | null
          birth_year?: number | null
          created_at?: string | null
          death_year?: number | null
          id?: string
          image?: string | null
          key_contributions?: string[] | null
          key_works?: string[] | null
          name?: string
          nationality?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      vocabulary_terms: {
        Row: {
          created_at: string
          created_by: string | null
          definition: string
          difficulty: string | null
          etymology: string | null
          example_usage: string | null
          featured: boolean | null
          id: string
          pronunciation: string | null
          published_at: string | null
          related_terms: Json
          related_theories: string[] | null
          status: string
          tags: Json
          term: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          definition: string
          difficulty?: string | null
          etymology?: string | null
          example_usage?: string | null
          featured?: boolean | null
          id?: string
          pronunciation?: string | null
          published_at?: string | null
          related_terms?: Json
          related_theories?: string[] | null
          status?: string
          tags?: Json
          term: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          definition?: string
          difficulty?: string | null
          etymology?: string | null
          example_usage?: string | null
          featured?: boolean | null
          id?: string
          pronunciation?: string | null
          published_at?: string | null
          related_terms?: Json
          related_theories?: string[] | null
          status?: string
          tags?: Json
          term?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {},
  },
} as const
