import { useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Database } from '../lib/database.types';

type Hotel = Database['public']['Tables']['hotels']['Row'];
type Feature = Database['public']['Tables']['accessibility_features']['Row'];
type ComplianceNote = Database['public']['Tables']['compliance_notes']['Row'];
type SentimentInsight = Database['public']['Tables']['sentiment_insights']['Row'];

interface HotelAnalysis {
  hotel: Hotel;
  features: Feature[];
  compliance: ComplianceNote[];
  sentiment: SentimentInsight[];
}

interface FormData {
  url: string;
  name: string;
  location: string;
}

export function useHotelAnalysis() {
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState<HotelAnalysis | null>(null);
  const [error, setError] = useState<string | null>(null);

  const analyzeHotel = async (data: FormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) {
        throw new Error('You must be logged in to analyze hotels');
      }

      // Create hotel entry
      const { data: hotel, error: hotelError } = await supabase
        .from('hotels')
        .insert({
          url: data.url,
          name: data.name,
          location: data.location,
          user_id: user.id,
          accessibility_score: 7.5, // Mock score for now
        })
        .select()
        .single();

      if (hotelError || !hotel) {
        throw new Error('Failed to create hotel entry');
      }

      // Mock features data
      const features = [
        {
          name: 'Wheelchair Access',
          available: true,
          description: 'Ramps and elevator access throughout the property',
        },
        {
          name: 'Braille Signage',
          available: true,
          description: 'Available in elevators and room numbers',
        },
        {
          name: 'Hearing Loops',
          available: false,
          description: 'Not available in conference rooms',
        },
        {
          name: 'Accessible Bathrooms',
          available: true,
          description: 'Modified bathrooms in all public areas',
        },
      ];

      // Insert features
      const { data: insertedFeatures, error: featuresError } = await supabase
        .from('accessibility_features')
        .insert(
          features.map((f) => ({
            hotel_id: hotel.id,
            ...f,
          }))
        )
        .select();

      if (featuresError) {
        throw new Error('Failed to create accessibility features');
      }

      // Mock compliance notes
      const complianceNotes = [
        'Meets ADA requirements for entrance accessibility',
        'Emergency evacuation procedures need updating',
        'Staff training on accessibility assistance recommended',
      ];

      // Insert compliance notes
      const { data: insertedNotes, error: notesError } = await supabase
        .from('compliance_notes')
        .insert(
          complianceNotes.map((note) => ({
            hotel_id: hotel.id,
            note,
          }))
        )
        .select();

      if (notesError) {
        throw new Error('Failed to create compliance notes');
      }

      // Mock sentiment insights
      const sentimentInsights = [
        'Positive feedback on wheelchair accessibility and staff assistance',
        'Some concerns about limited availability of accessible rooms',
        'High praise for clear signage and navigation',
      ];

      // Insert sentiment insights
      const { data: insertedInsights, error: insightsError } = await supabase
        .from('sentiment_insights')
        .insert(
          sentimentInsights.map((insight) => ({
            hotel_id: hotel.id,
            insight,
          }))
        )
        .select();

      if (insightsError) {
        throw new Error('Failed to create sentiment insights');
      }

      setAnalysis({
        hotel,
        features: insertedFeatures as Feature[],
        compliance: insertedNotes as ComplianceNote[],
        sentiment: insertedInsights as SentimentInsight[],
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    analysis,
    error,
    analyzeHotel,
  };
}