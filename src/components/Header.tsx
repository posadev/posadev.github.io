import React, {useEffect, useState} from 'react';
import {Image, Menu, Users, X} from 'lucide-react';
import posadevLogo from '@/img/posadev-logo.png';
import {useLocation, useNavigate} from "react-router-dom";
import {cn, scrollToTop} from "@/lib/utils.ts";

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

    const isActive = (path: string) => {
        return location.pathname + location.hash === path;
    };

    return (
        <header
            className={cn(
                location.pathname === "/" ? 'fixed' : 'sticky',
                (location.pathname !== "/" || isMenuOpen) || isScrolled ? "bg-black/95 backdrop-blur-md shadow-lg border-b border-posadev-darkPink/20" : "bg-transparent",
                "top-0 left-0 right-0 z-50 transition-all duration-300"
            )}
        >
            <div className="container mx-auto px-4 pt-2">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-2">
                        <a onClick={() => navigate('/#inicio')}>
                            <img
                                src={posadevLogo}
                                alt="Posadev Logo"
                                className="h-8 w-auto"
                            />
                        </a>
                    </div>

                    <nav className="hidden md:flex items-center space-x-8">
                        <a
                            onClick={() => navigate('/#patrocinadores')}
                            className={cn(
                                "bg-gradient-to-r from-posadev-darkPink to-posadev-brightPink text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-posadev-brightPink/25 transition-all duration-300 flex items-center space-x-1 hover:underline hover:shadow-posadev-brightPink/25",
                                isActive('/#patrocinadores') && "underline shadow-posadev-brightPink/25"
                            )}>
                            <Users className="w-4 h-4" aria-hidden="true"/>
                            <span>Se un Patrocinador</span>
                        </a>
                        <a
                            onClick={() => navigate('/#comunidades')}
                            className={cn("text-white hover:text-posadev-brightPink transition-colors duration-300 flex items-center space-x-1", isActive('/#galeria') && "text-posadev-brightPink")}
                        >
                            <span>Organizadores</span>
                        </a>
                        <a
                            onClick={() => navigate('/#galeria')}
                            className={cn("text-white hover:text-posadev-brightPink transition-colors duration-300 flex items-center space-x-1", isActive('/#galeria') && "text-posadev-brightPink")}
                        >
                            <span>Galería</span>
                        </a>
                        <a
                            onClick={() => {
                                scrollToTop();
                                navigate('/code-of-conduct')
                            }}
                            className={cn("text-white hover:text-posadev-brightPink transition-colors duration-300 flex items-center space-x-1", isActive('/code-of-conduct') && "text-posadev-brightPink")}>
                            Código de Conducta
                        </a>
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white p-2"
                    >
                        {isMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div
                        className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-posadev-darkPink/20">
                        <nav className="px-4 py-4 space-y-4">
                            <a
                                onClick={() => navigateMenu('/#galeria')}
                                className={cn("w-full text-left text-white hover:text-posadev-brightPink transition-colors duration-300 flex items-center space-x-2 py-2", isActive('/#galeria') && "text-posadev-brightPink")}
                            >
                                Comunidades
                            </a>
                            <a
                                onClick={() => navigateMenu('/#galeria')}
                                className={cn("w-full text-left text-white hover:text-posadev-brightPink transition-colors duration-300 flex items-center space-x-2 py-2", isActive('/#galeria') && "text-posadev-brightPink")}
                            >
                                <Image className="w-4 h-4" aria-hidden="true"/>
                                Galería
                            </a>
                            <a
                                onClick={() => navigateMenu('/#patrocinadores')}
                                className={cn("w-full text-left bg-gradient-to-r from-posadev-darkPink to-posadev-brightPink text-white px-4 py-3 rounded-lg flex items-center space-x-2 mt-4", isActive('/#patrocinadores') && "underline shadow-posadev-brightPink/25")}
                            >
                                <Users className="w-4 h-4" aria-hidden="true"/>
                                Ser Patrocinador
                            </a>
                            <a
                                onClick={() => {
                                    scrollToTop()
                                    navigateMenu('/code-of-conduct')
                                }}
                                className={cn("text-white hover:text-posadev-brightPink transition-colors duration-300 flex items-center space-x-1", isActive('/code-of-conduct') && "text-posadev-brightPink")}>
                                Código de Conducta
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
