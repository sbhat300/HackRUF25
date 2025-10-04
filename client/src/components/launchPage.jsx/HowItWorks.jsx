import React from 'react'
export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
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
        <div className="mt-16 bg-slate-50 rounded-xl p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">See It In Action</h3>
              <p className="text-slate-600 mb-6">
                Watch how our technology bridges communication gaps in
                real-world scenarios. From helping speech-impaired individuals
                communicate effectively to breaking down language barriers in
                international settings.
              </p>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Watch Demo
              </button>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0">
              <div className="bg-white p-2 rounded-lg shadow-md">
                <div className="aspect-w-16 aspect-h-9 bg-slate-200 rounded relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-indigo-600 opacity-80"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Demo preview"
                    className="object-cover w-full h-full opacity-60"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}