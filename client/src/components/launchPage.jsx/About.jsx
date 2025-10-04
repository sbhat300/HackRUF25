import React from 'react'
export function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-indigo-100 rounded-full filter blur-3xl opacity-70"></div>
              <img
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team collaborating"
                className="relative rounded-lg shadow-xl w-full max-w-lg mx-auto"
              />
              <div className="absolute -bottom-4 right-10 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-4">
                    <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm font-medium">
                      G
                    </div>
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium">
                      E
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Powered by</p>
                    <p className="text-sm font-medium">Gemini & ElevenLabs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-slate-600 mb-6">
              At VoiceConnect, we believe that communication is a fundamental
              human right. Our mission is to empower speech-impaired individuals
              and break down language barriers that prevent people from
              connecting with one another.
            </p>
            <p className="text-slate-600 mb-6">
              Inspired by the challenges faced by over 70 million people
              worldwide with speech impairments and the countless others who
              struggle with language barriers, we've created a solution that
              leverages cutting-edge AI technology to bridge these gaps.
            </p>
            <p className="text-slate-600 mb-8">
              By combining Google's Gemini AI with ElevenLabs' voice synthesis
              technology, we've created a platform that not only translates
              language but also gives a voice to those who cannot speak, making
              communication accessible to everyone, everywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="font-medium">Social Impact Project</span>
              </div>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <span className="font-medium">Privacy Protected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}