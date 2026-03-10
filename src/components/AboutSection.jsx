import React from 'react';
import { Target, Users, BookOpen, Globe } from 'lucide-react';
import './AboutSection.css';

const AboutSection = () => {
  const features = [
    {
      icon: <Target className="text-accent" size={32} />,
      title: 'Tập trung',
      description: 'Phát triển kiến thức và kỹ năng thực tế về nền Kinh tế Số (Digital Economy), giúp sinh viên nắm bắt xu hướng công nghệ lõi.'
    },
    {
      icon: <Users className="text-accent" size={32} />,
      title: 'Mở rộng',
      description: 'Thu hút sinh viên Học viện Tài chính và mở rộng ra sinh viên các trường đại học trên toàn địa bàn Thủ đô Hà Nội.'
    },
    {
      icon: <BookOpen className="text-accent" size={32} />,
      title: 'Kỹ năng',
      description: 'Trau dồi kỹ năng mềm thiết yếu như nghiên cứu, thuyết trình, và làm việc nhóm để nâng cao năng lực cạnh tranh.'
    },
    {
      icon: <Globe className="text-accent" size={32} />,
      title: 'Hội nhập',
      description: 'Đẩy mạnh phong trào học tiếng Anh chuyên ngành, định hình công dân toàn cầu trong kỷ nguyên số.'
    }
  ];

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="section-header text-center fade-on-scroll">
          <h2 className="section-title">Tổng quan <span className="text-accent">Cuộc thi</span></h2>
          <div className="divider"></div>
          <p className="section-subtitle">
            English Champion quay trở lại trong năm 2026 với chủ đề thời sự <strong>"Digital Economy"</strong> nhằm cung cấp hành trang thiết yếu cho sinh viên trước kỷ nguyên kinh tế số.
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
        
        <div className="audience-info glass-panel fade-on-scroll delay-100 mt-md" style={{ textAlign: 'center', marginBottom: '1.5rem', padding: '1.5rem' }}>
          <h3 style={{ color: 'var(--color-accent)', marginBottom: '0.5rem', fontSize: '1.5rem' }}>Đối tượng dự thi</h3>
          <p style={{ fontSize: '1.1rem', margin: 0 }}>Sinh viên Học viện Tài chính và sinh viên các trường đại học trên toàn địa bàn thành phố Hà Nội.</p>
        </div>

        <div className="registration-info glass-panel fade-on-scroll delay-200">
          <div className="reg-block">
            <h3>Đăng ký Cá nhân</h3>
            <p>Ban Tổ chức sẽ hỗ trợ ghép nhóm ngẫu nhiên sau khi đóng đơn vòng 1.</p>
          </div>
          <div className="reg-divider"></div>
          <div className="reg-block">
            <h3>Đăng ký Theo nhóm</h3>
            <p>Đăng ký trực tiếp với đội gồm <strong>5 thành viên</strong>.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
