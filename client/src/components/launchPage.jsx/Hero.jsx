import React from 'react'
import EastIcon from '@mui/icons-material/East';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
export function Hero() {
  return (
    <section className="pt-32 pb-24 px-4 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Breaking Barriers in{' '}
            <span className="text-indigo-600">Communication</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg">
            Empowering speech-impaired individuals and bridging language gaps
            with advanced AI technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-md font-medium text-lg flex items-center justify-center transition-colors">
              Get Started <EastIcon size={18} className="ml-2" />
            </button>
            <button className="bg-white hover:bg-slate-100 text-indigo-600 border border-indigo-600 px-8 py-3 rounded-md font-medium text-lg flex items-center justify-center transition-colors">
              Learn More
            </button>
          </div>
          <div className="mt-10 flex items-center">
            <div className="flex -space-x-2">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </div>
            <p className="ml-4 text-sm text-slate-600">
              <span className="font-semibold">1,000+ users</span> already
              breaking communication barriers
            </p>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-indigo-100 rounded-full filter blur-3xl opacity-70"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-cyan-100 rounded-full filter blur-3xl opacity-70"></div>
            <div className="relative bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <ChatBubbleOutlineIcon className="text-indigo-600" size={24} />
                  <span className="ml-2 font-medium">Voice Assistant</span>
                </div>
                <div className="h-3 w-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-indigo-100 rounded-2xl p-3 max-w-[80%]">
                    <p className="text-sm">
                      Hello! I need help communicating with my English-speaking
                      colleague.
                    </p>
                  </div>
                </div>
                <div className="flex items-start justify-end">
                  <div className="bg-indigo-600 text-white rounded-2xl p-3 max-w-[80%]">
                    <p className="text-sm">
                      I'll help translate your message. What would you like to
                      say?
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-100 rounded-2xl p-3 max-w-[80%]">
                    <p className="text-sm">
                      I would like to discuss our project timeline.
                    </p>
                  </div>
                </div>
                <div className="flex items-start justify-end">
                  <div className="bg-indigo-600 text-white rounded-2xl p-3 max-w-[80%]">
                    <p className="text-sm">
                      Translating and converting to speech... Done! Your
                      colleague can now hear your message.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 relative">
                <input
                  type="text"
                  placeholder="Type or speak your message..."
                  className="w-full bg-slate-100 rounded-full py-3 px-5 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-indigo-600 text-white rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}