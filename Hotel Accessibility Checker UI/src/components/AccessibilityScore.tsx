import React from 'react';
import { Shield, CheckCircle, XCircle } from 'lucide-react';

interface Feature {
  name: string;
  available: boolean;
  description: string;
}

interface AccessibilityScoreProps {
  score: number;
  features: Feature[];
  compliance: string[];
  sentiment: string[];
}

export default function AccessibilityScore({ score, features, compliance, sentiment }: AccessibilityScoreProps) {
  const getScoreColor = (score: number) => {
    if (score >= 8) return 'bg-green-500';
    if (score >= 6) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="w-full max-w-2xl space-y-8 bg-white rounded-xl shadow-lg p-6">
      <div className="text-center">
        <div className="inline-flex items-center justify-center p-4 bg-gray-50 rounded-full mb-4">
          <Shield className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Accessibility Score</h3>
        <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`absolute left-0 top-0 h-full transition-all duration-500 ${getScoreColor(score)}`}
            style={{ width: `${score * 10}%` }}
          />
        </div>
        <p className="mt-2 text-3xl font-bold">{score.toFixed(1)}/10</p>
      </div>

      <div className="space-y-6">
        <section>
          <h4 className="text-lg font-semibold mb-3">Accessibility Features</h4>
          <div className="grid gap-4 md:grid-cols-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                {feature.available ? (
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                )}
                <div>
                  <p className="font-medium">{feature.name}</p>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h4 className="text-lg font-semibold mb-3">Compliance Notes</h4>
          <ul className="space-y-2">
            {compliance.map((note, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                <span className="text-gray-700">{note}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h4 className="text-lg font-semibold mb-3">Guest Sentiment</h4>
          <div className="space-y-3">
            {sentiment.map((insight, index) => (
              <p key={index} className="text-gray-700 bg-gray-50 p-3 rounded-lg">{insight}</p>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}