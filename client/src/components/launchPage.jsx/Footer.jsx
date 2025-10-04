import React from 'react'
import Logo from '../../images/SpeakAbleLogoNoText.png'
import GitHubIcon from '@mui/icons-material/GitHub';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-6 gap-6 sm:gap-2 items-center mb-8">
          {/* Logo and Name - 2 columns */}
          <div className="col-span-6 sm:col-span-2 flex items-center justify-center sm:justify-start gap-3">
            <img src={Logo} className='h-10 sm:h-12'/>
            <span className="font-bold text-xl text-white">
              SpeakAble
            </span>
          </div>
          
          {/* Mission Statement - 3 columns */}
          <div className="col-span-6 sm:col-span-3 flex items-center justify-center sm:justify-start sm:px-0 sm:pl-2">
            <p className="text-sm text-gray-300 text-center sm:text-left max-w-md leading-relaxed">
              Breaking communication barriers for speech-impaired individuals
              and bridging language gaps with advanced AI technology.
            </p>
          </div>
          
          {/* GitHub Icon - 1 column */}
          <div className="col-span-6 sm:col-span-1 flex items-center justify-center sm:justify-end">
            <a 
              target="_blank" 
              href='https://github.com/sbhat300/HackRUF25'
              className="text-white hover:text-gray-400 transition-colors duration-200 p-2"
              rel="noopener noreferrer"
              aria-label="View on GitHub"
            >
              <GitHubIcon sx={{ fontSize: 32 }} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8">
          <p className="text-sm text-center text-slate-400">
            © 2025 SpeakAble. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}