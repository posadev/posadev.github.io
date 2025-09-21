
import React, {useEffect} from 'react';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import Sponsors from '@/components/Sponsors';
import Footer from '@/components/Footer';
import {useLocation} from "react-router-dom";

const Index = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);
  return (
    <div className="min-h-screen">
      <Hero />
      <Gallery />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Index;
