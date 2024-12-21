import React, { useState } from 'react';
import { Building2 } from 'lucide-react';
import AccessibilityForm from './components/AccessibilityForm';
import AccessibilityScore from './components/AccessibilityScore';

// Mock data for demonstration
const mockAnalysis = {
  score: 7.5,
  features: [
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
  ],
  compliance: [
    'Meets ADA requirements for entrance accessibility',
    'Emergency evacuation procedures need updating',
    'Staff training on accessibility assistance recommended',
  ],
  sentiment: [
    'Positive feedback on wheelchair accessibility and staff assistance',
    'Some concerns about limited availability of accessible rooms',
    'High praise for clear signage and navigation',
  ],
};

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState<typeof mockAnalysis | null>(null);

  const handleSubmit = async (data: { url: string; name: string; location: string }) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setAnalysis(mockAnalysis);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-blue-100 rounded-full mb-4">
            <Building2 className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Hotel Accessibility Checker
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Analyze and assess hotel accessibility features using AI-powered insights
            to ensure comfortable stays for all guests.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <AccessibilityForm onSubmit={handleSubmit} isLoading={isLoading} />
          </div>

          {analysis && (
            <div className="mt-8">
              <AccessibilityScore {...analysis} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;