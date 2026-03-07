import React from 'react';
import { Handshake } from 'lucide-react';
import './SponsorsSection.css';

const SponsorsSection = () => {
  // Using downloaded images as placeholders for sponsors
  const sponsorTiers = [
    {
      tier: "Đơn vị Tổ chức & Đồng hành",
      logos: [
        { src: "/avatar.png", alt: "Học viện Tài chính" },
      ]
    },
    {
      tier: "Nhà tài trợ Kim Cương",
      logos: [
        { src: "/EC2025.jpg", alt: "Nhà tài trợ 1" },
        { src: "/cover.png", alt: "Nhà tài trợ 2" }
      ]
    },
    {
      tier: "Bảo trợ Truyền thông",
      logos: [
        { src: "/EC2024.jpg", alt: "Bảo trợ 1" },
        { src: "/EC2023.jpg", alt: "Bảo trợ 2" }
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
          <h2 className="section-title">Nhà Tài Trợ & <span className="text-accent">Đối Tác</span></h2>
          <div className="divider"></div>
          <p className="section-subtitle">
            Những tổ chức, doanh nghiệp đồng hành cùng English Champion 2025
          </p>
        </div>

        <div className="sponsors-container">
          {sponsorTiers.map((tierData, index) => (
            <div key={index} className={`sponsor-tier fade-on-scroll delay-${(index % 3) * 100}`}>
              <h3 className="tier-title">{tierData.tier}</h3>
              <div className="sponsor-logos">
                {tierData.logos.map((logo, logoIndex) => (
                  <div key={logoIndex} className="sponsor-logo-box glass-panel">
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
