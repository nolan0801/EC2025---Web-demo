import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TimelineSection from './components/TimelineSection';
import GallerySection from './components/GallerySection';
import RoundsSection from './components/RoundsSection';
import PrizesSection from './components/PrizesSection';
import RegisterSection from './components/RegisterSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-on-scroll');
      elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          el.classList.add('animate-fade-up');
          el.classList.remove('fade-on-scroll');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <div className="app-background"></div>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <GallerySection />
        <RoundsSection />
        <PrizesSection />
        <RegisterSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
