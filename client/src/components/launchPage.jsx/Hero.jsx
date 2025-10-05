import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const navigate = useNavigate();
  const [displayText, setDisplayText] = useState('');
  const [isExpanding, setIsExpanding] = useState(false);
  const [currentExampleIndex, setCurrentExampleIndex] = useState(0);


  const examples = [
    {
      short: 'need water',
      expanded: 'I am thirsty. I need to drink water.'
    },
    {
      short: 'where coffee',
      expanded: 'Where is the cafe?'
    },
    {
      short: 'help me',
      expanded: 'I need assistance. Can you help me?'
    },
    {
      short: 'hungry now',
      expanded: 'I am feeling hungry. I would like to eat something.'
    },
    {
      short: 'bathroom where',
      expanded: 'Excuse me, where is the bathroom?'
    }
  ];



  useEffect(() => {
    const currentExample = examples[currentExampleIndex];
    let timeoutId;

    if (!isExpanding) {
      // Type the short phrase
      if (displayText.length < currentExample.short.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentExample.short.slice(0, displayText.length + 1));
        }, 100);
      } else {
        // Pause before expanding
        timeoutId = setTimeout(() => {
          setIsExpanding(true);
          setDisplayText(currentExample.short);
        }, 1000);
      }
    } else {
      // Expand to full sentence
      if (displayText.length < currentExample.expanded.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentExample.expanded.slice(0, displayText.length + 1));
        }, 50);
      } else {
        // Pause before backspacing
        timeoutId = setTimeout(() => {
          backspace();
        }, 2000);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isExpanding, currentExampleIndex]);

  const backspace = () => {
    const interval = setInterval(() => {
      setDisplayText(prev => {
        if (prev.length <= 0) {
          clearInterval(interval);
          // Move to next example
          setCurrentExampleIndex(prevIndex => (prevIndex + 1) % examples.length);
          setIsExpanding(false);
          return '';
        }
        return prev.slice(0, -1);
      });
    }, 30);
  };

  return (
    <section className="pt-32 pb-24 px-4 overflow-hidden lg:px-8 xl:px-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 uppercase">
            Breaking Barriers in Communication
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg">
            Empowering speech-impaired individuals and bridging language gaps
            with advanced AI technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => navigate('/app')}
              className="bg-indigo-600 hover:bg-indigo-700 cursor-pointer text-white px-8 py-3 rounded-md font-medium text-lg flex items-center justify-center transition-colors"
            >
              Get Started 
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-12 md:mt-0">
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-indigo-100 rounded-full filter blur-3xl opacity-70"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-cyan-100 rounded-full filter blur-3xl opacity-70"></div>
            
            <div className="relative bg-white p-8 rounded-2xl shadow-xl min-h-[280px] flex flex-col justify-center">
              <div className="mb-4">
                <span className="text-sm font-medium text-indigo-600 uppercase tracking-wide">
                  AI-Powered Expansion
                </span>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-6 min-h-[120px] flex items-center">
                <p className="text-2xl font-medium text-slate-800">
                  {displayText}
                  <span className="inline-block w-0.5 h-7 bg-indigo-600 ml-1 animate-pulse"></span>
                </p>
              </div>
              
              <div className="mt-6 flex items-center justify-center gap-2">
                {examples.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentExampleIndex 
                        ? 'w-8 bg-indigo-600' 
                        : 'w-2 bg-slate-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}