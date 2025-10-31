import React, {useEffect, useState} from 'react';
import {Image, Menu, UserStar, X} from 'lucide-react';
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
                "h-20",
                location.pathname === "/" ? 'fixed' : 'sticky',
                (location.pathname !== "/" || isMenuOpen) || isScrolled ? "bg-black/95 backdrop-blur-md shadow-lg border-b border-posadev-darkPink/20" : "bg-transparent",
                "top-0 left-0 right-0 z-50 transition-all duration-300"
            )}
        >
            <div className="container mx-auto px-4 pt-2">
                <div className="flex items-center justify-between h-16">
                        <a className="flex items-center space-x-2" onClick={() => navigate('/#inicio')}>
                            <img
                                src={posadevLogo}
                                alt="Posadev Logo"
                                className="h-8 w-auto"
                            />
                        </a>

                    <nav className="hidden md:flex items-center space-x-8">
                        <a
                            onClick={() => navigate('/#patrocinadores')}
                            className={cn(
                                "bg-gradient-to-r from-posadev-darkPink to-posadev-brightPink text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-posadev-brightPink/25 transition-all duration-300 flex items-center space-x-1 hover:underline hover:shadow-posadev-brightPink/25",
                                isActive('/#patrocinadores') && "underline shadow-posadev-brightPink/25"
                            )}>
                            <UserStar className="w-4 h-4" aria-hidden="true"/>
                            <span>Se un Patrocinador</span>
                        </a>
                        <a
                            onClick={() => navigate('/#organizadores')}
                            className={cn("text-white hover:text-posadev-brightPink transition-colors duration-300 flex items-center space-x-1", isActive('/#comunidades') && "text-posadev-brightPink")}
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
                        className="md:hidden absolute top-16 left-0 right-0 bg-black/95 rounded-b-xl backdrop-blur-md border-b border-posadev-darkPink/20">
                        <nav className="flex flex-col gap-2 px-4 py-4 space-y-4">
                            <a
                                onClick={() => navigateMenu('/#organizadores')}
                                className={cn("w-full text-white hover:text-posadev-brightPink transition-colors duration-300 flex items-center space-x-2", isActive('/#comunidades') && "text-posadev-brightPink")}
                            >
                                Organizadores
                            </a>
                            <a
                                onClick={() => navigateMenu('/#galeria')}
                                className={cn("w-full flex items-center gap-2 text-white hover:text-posadev-brightPink transition-colors duration-300 space-x-2", isActive('/#galeria') && "text-posadev-brightPink")}
                            >
                                <Image className="w-4 h-4" aria-hidden="true"/>
                                Galería
                            </a>
                            <a
                                onClick={() => navigateMenu('/#patrocinadores')}
                                className={cn("w-full bg-gradient-to-r from-posadev-darkPink to-posadev-brightPink text-white px-4 py-3 rounded-lg flex items-center space-x-2", isActive('/#patrocinadores') && "underline shadow-posadev-brightPink/25")}
                            >
                                <UserStar className="w-4 h-4" aria-hidden="true"/>
                                Se un patrocinador
                            </a>
                            <a
                                onClick={() => {
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
