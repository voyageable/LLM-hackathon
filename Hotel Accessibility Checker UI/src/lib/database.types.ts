export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      hotels: {
        Row: {
          id: string
          url: string
          name: string
          location: string
          accessibility_score: number | null
          created_at: string
          user_id: string
        }
        Insert: {
          id?: string
          url: string
          name: string
          location: string
          accessibility_score?: number | null
          created_at?: string
          user_id: string
        }
        Update: {
          id?: string
          url?: string
          name?: string
          location?: string
          accessibility_score?: number | null
          created_at?: string
          user_id?: string
        }
      }
      accessibility_features: {
        Row: {
          id: string
          hotel_id: string
          name: string
          available: boolean
          description: string | null
          created_at: string
        }
        Insert: {
          id?: string
          hotel_id: string
          name: string
          available?: boolean
          description?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          hotel_id?: string
          name?: string
          available?: boolean
          description?: string | null
          created_at?: string
        }
      }
      compliance_notes: {
        Row: {
          id: string
          hotel_id: string
          note: string
          created_at: string
        }
        Insert: {
          id?: string
          hotel_id: string
          note: string
          created_at?: string
        }
        Update: {
          id?: string
          hotel_id?: string
          note?: string
          created_at?: string
        }
      }
      sentiment_insights: {
        Row: {
          id: string
          hotel_id: string
          insight: string
          created_at: string
        }
        Insert: {
          id?: string
          hotel_id: string
          insight: string
          created_at?: string
        }
        Update: {
          id?: string
          hotel_id?: string
          insight?: string
          created_at?: string
        }
      }
    }
  }
}