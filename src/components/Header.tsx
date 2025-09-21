
import React, { useState, useEffect } from 'react';
import { Menu, X, Users, Image } from 'lucide-react';
import posadevLogo from '@/img/posadev-logo.png';
import {Link, useLocation, useNavigate} from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateMenu = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
  }

  return (
    <header
      className={`${location.pathname === "/" ? 'fixed' : 'sticky'} top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || location.pathname ==='/code-of-conduct'
        ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-posadev-darkPink/20'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <button onClick={() => navigate('/#inicio')}>
              <img
                  src={posadevLogo}
                  alt="Posadev Logo"
                  className="h-8 w-auto"
              />
            </button>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              onClick={() => navigate('/#galeria')}
              className="text-white hover:text-posadev-brightPink transition-colors duration-300 flex items-center space-x-1"
            >
              <Image className="w-4 h-4" />
              <span>Galería</span>
            </a>
            <a
              onClick={() => navigate('/#patrocinadores')}
              className="bg-gradient-to-r from-posadev-darkPink to-posadev-brightPink text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-posadev-brightPink/25 transition-all duration-300 flex items-center space-x-1"
            >
              <Users className="w-4 h-4" aria-hidden={true} />
              <span>Ser Patrocinador</span>
            </a>
            <a
                onClick={() => navigate('/code-of-conduct')}
                className="text-white hover:text-posadev-brightPink transition-colors duration-300 flex items-center space-x-1">
              Codigo de Conducta
            </a>
          </nav>

          {/* Mobile menu button */}
          <a
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </a>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-posadev-darkPink/20">
            <nav className="px-4 py-4 space-y-4">
              <a
                onClick={() => navigateMenu('/#galeria')}
                className="w-full text-left text-white hover:text-posadev-brightPink transition-colors duration-300 flex items-center space-x-2 py-2"
              >
                <Image className="w-4 h-4" aria-hidden="true"/>
                Galería
              </a>
              <a
                onClick={() => navigateMenu('/#patrocinadores')}
                className="w-full text-left bg-gradient-to-r from-posadev-darkPink to-posadev-brightPink text-white px-4 py-3 rounded-lg flex items-center space-x-2 mt-4"
              >
                <Users className="w-4 h-4" aria-hidden="true" />
                Ser Patrocinador
              </a>
              <a
                  onClick={() => navigateMenu('/code-of-conduct')}
                  className="text-white hover:text-posadev-brightPink transition-colors duration-300 flex items-center space-x-1">
                Codigo de Conducta
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
