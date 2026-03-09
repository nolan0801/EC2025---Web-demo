import React from 'react';
import './HeroSection.css';
import Countdown from './Countdown';

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-content animate-fade-up">
        <h1 className="hero-title animate-fade-up">
          ENGLISH CHAMPION <br className="mobile-break" /><span className="text-accent">2026</span>
        </h1>
        <div className="hero-logo-container delay-100 animate-fade-up">
          <img src="/avatar.png" alt="English Champion 2026 Logo" className="hero-main-logo" />
        </div>
        
        <Countdown targetDate="2026-04-10T23:59:59" />
        
        <div className="hero-actions delay-200 animate-fade-up">
          <a href="#register" className="btn btn-primary">Đăng ký ngay</a>
          <a href="#about" className="btn btn-outline">Tìm hiểu thêm</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
