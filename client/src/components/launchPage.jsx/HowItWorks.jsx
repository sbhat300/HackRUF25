import React from 'react'
export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-slate-600 max-w-2xl text-2xl md:text-4xl mx-auto">
            Our platform uses advanced AI to break down communication barriers
            in three simple steps.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative">
            <div className="bg-white rounded-xl shadow-md p-8 relative z-10 h-full">
              <div className="bg-indigo-600 text-white h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Input Your Message</h3>
              <p className="text-slate-600">
                Type your message, use gesture recognition, or upload an image
                of sign language. Our system accepts multiple forms of input to
                accommodate different needs.
              </p>
            </div>
            <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-0">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 0L39.5 20L20 40L0.5 20L20 0Z" fill="#E0E7FF" />
                <path
                  d="M16 20H24M24 20L20 16M24 20L20 24"
                  stroke="#4F46E5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-xl shadow-md p-8 relative z-10 h-full">
              <div className="bg-indigo-600 text-white h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Processing</h3>
              <p className="text-slate-600">
                Gemini AI interprets your message, understanding context and
                intent. For language translation, it identifies the target
                language and prepares the content for conversion.
              </p>
            </div>
            <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-0">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 0L39.5 20L20 40L0.5 20L20 0Z" fill="#E0E7FF" />
                <path
                  d="M16 20H24M24 20L20 16M24 20L20 24"
                  stroke="#4F46E5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-xl shadow-md p-8 h-full">
              <div className="bg-indigo-600 text-white h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Communication Output
              </h3>
              <p className="text-slate-600">
                ElevenLabs converts the processed message into natural-sounding
                speech. The result is delivered in real-time, allowing for
                seamless communication between parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}