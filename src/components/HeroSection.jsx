import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-content animate-fade-up">
        <div className="hero-badge">Học viện Tài chính</div>
        <h1 className="hero-title">
          ENGLISH CHAMPION <span className="text-accent">2025</span>
        </h1>
        <p className="hero-subtitle delay-100 animate-fade-up">
          Cuộc thi về kỹ năng tiếng Anh lớn nhất Học viện Tài chính<br/>
          Chủ đề: <strong>Circular Economy</strong> (Kinh tế tuần hoàn)
        </p>
        
        <div className="hero-actions delay-200 animate-fade-up">
          <a href="#register" className="btn btn-primary">Đăng ký ngay</a>
          <a href="#about" className="btn btn-outline">Tìm hiểu thêm</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
