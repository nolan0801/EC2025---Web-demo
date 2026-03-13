import React from 'react';
import { Handshake } from 'lucide-react';
import './SponsorsSection.css';

const SponsorsSection = () => {
  const sponsorTiers = [
    {
      tier: "Đơn vị Chỉ đạo",
      logos: [
        { src: "/donvidonghanh.png", alt: "Đơn vị Chỉ đạo", isLarge: true }
      ]
    },
    {
      tier: "Đơn vị Tổ chức",
      logos: [
        { src: "/donvitochuc.png", alt: "YLC", }
      ]
    }
  ];

  return (
    <section id="sponsors" className="section-padding sponsors-section">
      <div className="container">
        <div className="section-header text-center fade-on-scroll">
          <div className="icon-wrapper">
            <Handshake className="text-accent" size={32} />
          </div>
          <h2 className="section-title">ĐƠN VỊ <span className="text-accent">ĐỒNG HÀNH</span></h2>
          <div className="divider"></div>
          <p className="section-subtitle">
            Những tổ chức, doanh nghiệp đồng hành cùng English Champion 2026
          </p>
        </div>

        <div className="sponsors-container">
          {sponsorTiers.map((tierData, index) => (
            <div key={index} className={`sponsor-tier fade-on-scroll delay-${(index % 3) * 100}`}>
              <h3 className="tier-title">{tierData.tier}</h3>
              <div className="sponsor-logos">
                {tierData.logos.map((logo, logoIndex) => (
                  <div key={logoIndex} className={`sponsor-logo-box ${logo.isLarge ? 'logo-large' : ''}`}>
                    <img src={logo.src} alt={logo.alt} className="sponsor-img" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
