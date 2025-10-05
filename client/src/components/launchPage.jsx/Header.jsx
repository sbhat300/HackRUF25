import React, { useEffect, useState, useRef } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import EastIcon from '@mui/icons-material/East';
import Logo from '../../images/SpeakAbleLogoNoText.png'
import { useNavigate } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showCTA, setShowCTA] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    // Observer to detect when hero section leaves viewport
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        // Show CTA when hero is NOT intersecting (scrolled past it)
        setShowCTA(!entry.isIntersecting)
      },
      {
        threshold: 0,
        rootMargin: '-80px 0px 0px 0px' // Account for header height
      }
    )

    const heroSection = document.querySelector('section') // First section is Hero
    if (heroSection) {
      heroObserver.observe(heroSection)
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (heroSection) {
        heroObserver.unobserve(heroSection)
      }
    }
  }, [])

  const handleGetStarted = () => {
    navigate('/app')
  }
  
  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 py-5 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center relative">
          {/* Logo - always centered */}
          <div
            className="flex items-center gap-2 sm:gap-3"
          >
            <img src={Logo} className='h-8 sm:h-10' alt="SpeakAble Logo" />
            <span className="font-bold text-xl sm:text-xl">SpeakAble</span>
          </div>

          {/* Get Started Button - absolute positioned on the right */}
          <button 
            onClick={handleGetStarted}
            aria-label="Get started with SpeakAble"
            className={`bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white
                rounded-md font-medium
                flex items-center whitespace-nowrap
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                absolute right-0 top-1/2 -translate-y-1/2
                transition-all duration-300
                px-3 py-2 sm:px-6 sm:gap-2
                ${showCTA
                ? 'opacity-100 translate-x-0 pointer-events-auto'
                : 'opacity-0 translate-x-4 pointer-events-none'
                }`}
          >
            <span className="hidden sm:inline">Get Started</span>
            <EastIcon fontSize="small" />
          </button>
        </div>
      </div>
    </header>
  )
}