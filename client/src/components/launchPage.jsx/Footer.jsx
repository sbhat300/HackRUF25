import React from 'react'
import Logo from '../../images/SpeakAbleLogoNoText.png'
import GitHubIcon from '@mui/icons-material/GitHub';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="">
        <div className="">
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-4">
              <img src={Logo} className='w-15'/>
              <span className="ml-3 font-bold text-xl text-white">
                SpeakAble
              </span>
            </div>
            <p className="text-sm mb-6 max-w-100 text-center">
              Breaking communication barriers for speech-impaired individuals
              and bridging language gaps with advanced AI technology.
            </p>
            <a target="_blank" href='https://github.com/sbhat300/HackRUF25'>
            <GitHubIcon />
            </a>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col justify-between items-center">
          <p className="text-sm">© 2025 SpeakAble. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}