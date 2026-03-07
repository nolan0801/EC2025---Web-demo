import React from 'react';
import { Camera } from 'lucide-react';
import './GallerySection.css';

const GallerySection = () => {
  // Placeholder images for previous events. The user will replace these later.
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
      alt: "Sinh viên Học viện Tài chính tại cuộc thi"
    },
    {
      src: "https://images.unsplash.com/photo-1475721025505-c337181313e6?q=80&w=2070&auto=format&fit=crop",
      alt: "Team building và thi đấu nhóm"
    },
    {
      src: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=2070&auto=format&fit=crop",
      alt: "Căng thẳng vòng chung kết tranh biện"
    },
    {
      src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
      alt: "Khoảnh khắc trao giải Quán quân"
    },
    {
      src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop",
      alt: "Sự kiện được đầu tư hoành tráng"
    },
    {
      src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
      alt: "Ban giám khảo chấm điểm"
    }
  ];

  return (
    <section id="gallery" className="section-padding gallery-section">
      <div className="container">
        <div className="section-header text-center fade-on-scroll">
          <div className="icon-wrapper">
            <Camera className="text-accent" size={32} />
          </div>
          <h2 className="section-title">Khoảnh Khắc <span className="text-accent">Ấn Tượng</span></h2>
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
        
        <div className="text-center mt-md fade-on-scroll delay-200">
           <p className="gallery-note">
             * Hình ảnh mang tính chất minh họa, sẽ được cập nhật hình ảnh thực tế của các mùa giải trước.
           </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
