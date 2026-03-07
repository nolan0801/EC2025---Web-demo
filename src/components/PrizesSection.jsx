import React from 'react';
import { Trophy, Medal, Star, Heart } from 'lucide-react';
import './PrizesSection.css';

const PrizesSection = () => {
  const prizes = [
    {
      title: 'Giải Quán Quân',
      value: '5,000,000 VNĐ',
      desc: 'Kèm hiện vật từ nhà tài trợ & Giấy chứng nhận',
      icon: <Trophy size={48} className="prize-icon golden" />,
      highlight: true
    },
    {
      title: 'Giải Á Quân',
      value: '3,500,000 VNĐ',
      desc: 'Kèm hiện vật từ nhà tài trợ & Giấy chứng nhận',
      icon: <Medal size={40} className="prize-icon silver" />,
      highlight: false
    },
    {
      title: '2 Giải Quý Quân',
      value: '2,500,000 VNĐ',
      desc: 'Kèm hiện vật từ nhà tài trợ & Giấy chứng nhận',
      icon: <Medal size={40} className="prize-icon bronze" />,
      highlight: false
    },
    {
      title: 'Đội thi được yêu thích nhất',
      value: '500,000 VNĐ',
      desc: 'Bình chọn qua Fanpage | Kèm hiện vật',
      icon: <Heart size={40} className="prize-icon red" />,
      highlight: false
    }
  ];

  return (
    <section id="prizes" className="section-padding prizes-section">
      <div className="container">
        <div className="section-header text-center fade-on-scroll">
          <h2 className="section-title">Cơ Cấu <span className="text-accent">Giải Thưởng</span></h2>
          <div className="divider"></div>
        </div>

        <div className="prizes-grid">
          {prizes.map((prize, index) => (
            <div 
              key={index} 
              className={`prize-card glass-panel fade-on-scroll delay-${(index % 4) * 100} ${prize.highlight ? 'highlight' : ''}`}
            >
              <div className="prize-icon-wrapper">
                {prize.icon}
              </div>
              <h3 className="prize-title">{prize.title}</h3>
              <div className="prize-value">{prize.value}</div>
              <p className="prize-desc">{prize.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
