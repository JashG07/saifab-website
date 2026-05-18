import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          Sai Fab<span className="dot">.</span>
        </a>
        
        <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#collections" onClick={() => setIsMobileMenuOpen(false)}>Collections</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
          <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</a>
          <a href="#contact" className="btn btn-primary contact-btn" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
}
