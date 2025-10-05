import React, { useState } from 'react'
import MicIcon from '@mui/icons-material/Mic'
import PublicIcon from '@mui/icons-material/Public'
import PsychologyIcon from '@mui/icons-material/Psychology'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import FeatureCard from './FeatureCard'
export function Features() {
  const [activeTab, setActiveTab] = useState('core');
  const coreFeatures = [
    {
      icon: <MicIcon className="text-indigo-600" />,
      title: "Speech Assistance",
      description: "Advanced speech synthesis using ElevenLabs technology to give a voice to those who cannot speak."
    },
    {
      icon: <PublicIcon className="text-indigo-600" />,
      title: "Language Translation",
      description: "Real-time translation across multiple languages, breaking down communication barriers across cultures."
    },
    {
      icon: <PsychologyIcon className="text-indigo-600" />,
      title: "Gemini AI Integration",
      description: "Powered by Google's Gemini AI for intelligent context understanding and natural communication."
    }
  ];

  const additionalFeatures = [
    {
      icon: <FavoriteIcon className="text-indigo-600" />,
      title: "Accessibility First",
      description: "Designed with accessibility at its core, ensuring everyone has equal access to communication tools."
    },
    {
      icon: <SentimentSatisfiedOutlinedIcon className="text-indigo-600"/>,
      title: "Intuitive Interface",
      description: "Simple, user-friendly design that requires minimal training and works across all devices."
    },
    {
      icon: <ShieldOutlinedIcon className="text-indigo-600"/>,
      title: "Privacy Focused",
      description: "Strong privacy protections ensure your communications remain secure and confidential."
    }
  ];

  const displayFeatures = activeTab === 'core' ? coreFeatures : additionalFeatures;
  
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-slate-800 text-3xl sm:text-5xl lg:text-6xl font-extrabold mx-auto max-w-5xl mb-16">
            Combines cutting-edge <span className='text-blue-600'>AI technologies</span> to
            help speech-impaired individuals and bridge language gaps.
          </h1>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setActiveTab('core')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'core'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Core Features
            </button>
            <button
              onClick={() => setActiveTab('additional')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'additional'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              More Features
            </button>
          </div>
        </div>
        
        {/* Bento Grid Layout with Staggered Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayFeatures.map((feature, index) => (
            <FeatureCard
              key={`${activeTab}-${index}`}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>

      <style jsx="true">{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}