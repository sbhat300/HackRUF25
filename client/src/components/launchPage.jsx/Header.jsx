import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../../images/SpeakAbleLogoNoText.png'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} className='w-15'/>
          <span className="ml-3 font-bold text-xl">SpeakAble</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a
                href="#features"
                className="hover:text-indigo-600 transition-colors"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-indigo-600 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="hover:text-indigo-600 transition-colors"
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-indigo-600 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button className="hidden md:block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
          Get Started
        </button>
        <button
          className="md:hidden text-slate-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <ul className="py-4 px-4">
            <li>
              <a
                href="#features"
                className="block py-2 hover:text-indigo-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 hover:text-indigo-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="block py-2 hover:text-indigo-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 hover:text-indigo-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>
            <li className="pt-2">
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
                Get Started
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}