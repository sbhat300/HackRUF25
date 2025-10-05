import React from 'react';

export function FeatureCard({ icon, title, description, delay }) {
  return (
    <div 
      className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-100 group hover:scale-105 hover:border-indigo-200"
      style={{
        animation: `fadeInUp 0.6s ease-out ${delay}s both`
      }}
    >
      <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-indigo-200 transition-colors duration-300 transform">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-slate-800 group-hover:text-indigo-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;