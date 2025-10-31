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
                element.scrollIntoView({behavior: "smooth"});
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
