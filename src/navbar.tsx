import React, { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white p-4 sticky top-0  shadow z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xl">T</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-xl">Taib</h1>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="flex space-x-8">
              <a href="#home" className="text-white hover:text-gray-300">Home</a>
              <a href="#about" className="text-white hover:text-gray-300">About</a>
              <a href="#experience" className="text-white hover:text-gray-300">Experience</a>
              <a href="#contact" className="text-white hover:text-gray-300">Contact Us</a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white"
              aria-label="Toggle navigation menu"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="space-y-2">
              <a href="#home" className="text-white block py-2">Home</a>
              <a href="#about" className="text-white block py-2">About</a>
              <a href="#experience" className="text-white block py-2">Experience</a>
              <a href="#contact" className="text-white block py-2">Contact Us</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar