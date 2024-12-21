import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface FormData {
  url: string;
  name: string;
  location: string;
}

interface AccessibilityFormProps {
  onSubmit: (data: FormData) => void;
  isLoading: boolean;
}

export default function AccessibilityForm({ onSubmit, isLoading }: AccessibilityFormProps) {
  const [formData, setFormData] = useState<FormData>({
    url: '',
    name: '',
    location: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4">
      <div className="space-y-2">
        <label htmlFor="url" className="block text-sm font-medium text-gray-700">
          Hotel Website URL
        </label>
        <input
          type="url"
          id="url"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="https://example.com"
          value={formData.url}
          onChange={(e) => setFormData({ ...formData, url: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Hotel Name
        </label>
        <input
          type="text"
          id="name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Grand Hotel"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
          Hotel Location
        </label>
        <input
          type="text"
          id="location"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="City, Country"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        {isLoading ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin" />
            <span>Analyzing...</span>
          </div>
        ) : (
          <div className="flex items-center justify-center space-x-2">
            <Send className="w-5 h-5" />
            <span>Check Accessibility</span>
          </div>
        )}
      </button>
    </form>
  );
}