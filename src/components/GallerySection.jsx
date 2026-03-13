import React from 'react';
import { Camera } from 'lucide-react';
import './GallerySection.css';

const GallerySection = () => {
  const galleryImages = [
    {
      src: "/EC2023.jpg",
      alt: "English Champion 2023"
    },
    {
      src: "/EC2024.jpg",
      alt: "English Champion 2024"
    },
    {
      src: "/EC2025.jpg",
      alt: "English Champion 2025"
    }
  ];

  return (
    <section id="gallery" className="section-padding gallery-section">
      <div className="container">
        <div className="section-header text-center fade-on-scroll">
          <div className="icon-wrapper">
            <Camera className="text-accent" size={32} />
          </div>
          <h2 className="section-title">KHOẢNG KHẮC <span className="text-accent">ẤN TƯỢNG</span></h2>
          <div className="divider"></div>
          <p className="section-subtitle">
            Hòa mình vào không khí bùng nổ của English Champion các mùa trước.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className={`gallery-item fade-on-scroll delay-${(index % 3) * 100}`}
            >
              <div className="gallery-img-wrapper">
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="gallery-overlay">
                  <span className="gallery-alt">{img.alt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
