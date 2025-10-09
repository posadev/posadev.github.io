import React, {useEffect} from 'react';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import Sponsors from '@/components/Sponsors';
import {useLocation} from "react-router-dom";
import Communities from "@/components/Communities.tsx";

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
            <Sponsors/>
            <Communities/>
            <Gallery/>
        </>
    );
};

export default Index;
