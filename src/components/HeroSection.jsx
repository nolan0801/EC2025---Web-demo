import React from 'react';
import './HeroSection.css';
import Countdown from './Countdown';

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-content animate-fade-up">
        <div className="hero-title-container animate-fade-up">
          <img src="/title.png" alt="English Champion 2026" className="hero-title-img" />
        </div>
        <div className="hero-logo-container delay-100 animate-fade-up">
          <img src="/element1.png" alt="English Champion 2026 Logo" className="hero-main-logo" />
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
