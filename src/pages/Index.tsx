import React, {useEffect} from 'react';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import {useLocation} from "react-router-dom";
import BecomeSponsor from "@/components/BecomeSponsor.tsx";
import Organizers from "@/components/Organizers.tsx";
import Speakers from "@/components/Speakers.tsx";

const Index = () => {
    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                setTimeout(() => {
                    const headerOffset = 80; // ajusta según el alto de tu navbar
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                    const offsetPosition = elementPosition - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                    });
                }, 100);
            }
        }
    }, [location]);

    return (
        <>
            <Hero/>
            <Speakers/>
            <BecomeSponsor/>
            <Organizers/>
            <Gallery/>
        </>
    );
};

export default Index;
