import React from 'react';
import { Target, Users, BookOpen, Globe } from 'lucide-react';
import './AboutSection.css';

const AboutSection = () => {
  const features = [
    {
      icon: <Target className="text-accent" size={32} />,
      title: 'Mục đích',
      description: 'Tạo sân chơi lành mạnh bổ ích cho sinh viên thể hiện khả năng ngoại ngữ và xử lý tình huống.'
    },
    {
      icon: <Users className="text-accent" size={32} />,
      title: 'Đối tượng',
      description: 'Toàn thể sinh viên từ các trường đại học trên địa bàn thành phố Hà Nội.'
    },
    {
      icon: <BookOpen className="text-accent" size={32} />,
      title: 'Kỹ năng',
      description: 'Trau dồi kỹ năng mềm, rèn luyện tâm lý vững vàng và bản lĩnh cá nhân qua 3 vòng thi.'
    },
    {
      icon: <Globe className="text-accent" size={32} />,
      title: 'Hội nhập',
      description: 'Đẩy mạnh phong trào học tập, tiếp cận và hội nhập quốc tế với công cụ ngoại ngữ.'
    }
  ];

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="section-header text-center fade-on-scroll">
          <h2 className="section-title">Tổng quan <span className="text-accent">Cuộc thi</span></h2>
          <div className="divider"></div>
          <p className="section-subtitle">
            English Champion là cuộc thi về kỹ năng tiếng Anh do Câu lạc bộ Thủ lĩnh trẻ Học viện Tài chính tổ chức.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-card glass-panel fade-on-scroll delay-${(index % 4) * 100}`}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="registration-info glass-panel fade-on-scroll delay-200 mt-md">
          <div className="reg-block">
            <h3>Hình thức đăng ký cá nhân</h3>
            <p>Sẽ được ban tổ chức ghép nhóm ngẫu nhiên sau vòng 1.</p>
          </div>
          <div className="reg-divider"></div>
          <div className="reg-block">
            <h3>Hình thức đăng ký nhóm</h3>
            <p>Mỗi nhóm gồm 5 thành viên.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
