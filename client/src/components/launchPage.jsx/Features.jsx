import React from 'react'
import MicIcon from '@mui/icons-material/Mic'
import PublicIcon from '@mui/icons-material/Public'
import PsychologyIcon from '@mui/icons-material/Psychology'
import FavoriteIcon from '@mui/icons-material/Favorite'
export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Breaking Communication Barriers
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our innovative solution combines cutting-edge AI technologies to
            help speech-impaired individuals and bridge language gaps.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-100">
            <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <MicIcon className="text-indigo-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Speech Assistance</h3>
            <p className="text-slate-600">
              Advanced speech synthesis using ElevenLabs technology to give a
              voice to those who cannot speak.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-100">
            <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <PublicIcon className="text-indigo-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Language Translation</h3>
            <p className="text-slate-600">
              Real-time translation across multiple languages, breaking down
              communication barriers across cultures.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-100">
            <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <PsychologyIcon className="text-indigo-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Gemini AI Integration
            </h3>
            <p className="text-slate-600">
              Powered by Google's Gemini AI for intelligent context
              understanding and natural communication.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-100">
            <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <FavoriteIcon className="text-indigo-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Accessibility First</h3>
            <p className="text-slate-600">
              Designed with accessibility at its core, ensuring everyone has
              equal access to communication tools.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-100">
            <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-indigo-600"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Intuitive Interface</h3>
            <p className="text-slate-600">
              Simple, user-friendly design that requires minimal training and
              works across all devices.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-100">
            <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-indigo-600"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Privacy Focused</h3>
            <p className="text-slate-600">
              Strong privacy protections ensure your communications remain
              secure and confidential.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}