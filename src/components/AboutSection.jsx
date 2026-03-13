import React from 'react';

import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="section-header text-center fade-on-scroll">
          <h2 className="section-title">Giới thiệu <span className="text-accent">Chung</span></h2>
          <div className="divider"></div>
        </div>

        <div className="about-grid">
          <div className="about-card glass-panel fade-on-scroll delay-100">
            <div className="about-icon" style={{ overflow: 'hidden', padding: '10px' }}>
              <img src="/donvitochuc.png" alt="YLC Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <h3>CLB Thủ Lĩnh Trẻ</h3>
            <p>
              CLB Thủ Lĩnh Trẻ Học viện Tài chính (Young Leaders Club – YLC) trực thuộc Đoàn Thanh niên Học viện Tài chính, được thành lập vào ngày 31/07/2018, là câu lạc bộ duy nhất hoạt động dưới sự bảo trợ của Ban Điều hành Chương trình Định hướng Chứng chỉ Quốc tế Học viện Tài chính.
            </p>
            <p>
              Ra đời với sứ mệnh phát triển kỹ năng tiếng Anh và kỹ năng mềm cho sinh viên, YLC hướng tới xây dựng môi trường học tập năng động, sáng tạo, giúp các bạn sinh viên rèn luyện sự tự tin, bản lĩnh và khả năng hội nhập trong học tập cũng như công việc.
            </p>
          </div>

          <div className="about-card glass-panel fade-on-scroll delay-200">
            <div className="about-icon" style={{ overflow: 'hidden' }}>
              <img src="/newlogo.png" alt="EC Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', transform: 'scale(1.4)' }} />
            </div>
            <h3>Khái quát Cuộc thi</h3>
            <p>
              English Champion là cuộc thi học thuật về Tiếng Anh và kỹ năng tư duy dành cho sinh viên, được tổ chức bởi CLB Thủ Lĩnh Trẻ Học viện Tài chính (YLC). Trải qua 4 mùa tổ chức, cuộc thi đã từng bước khẳng định sức hút của mình khi tạo nên sân chơi học thuật năng động, nơi các bạn sinh viên có cơ hội giao lưu, học hỏi, rèn luyện bản lĩnh và tự tin thể hiện khả năng Tiếng Anh.
            </p>
            <p>
              Với nhiều chủ đề mang tính thời sự như Virtual Reality, Introspection, Green Economy, Circular Economy, English Champion đã tạo được tiếng vang lớn trong Học viện và cộng đồng sinh viên tại Hà Nội, hứa hẹn tiếp tục bùng nổ với những dấu ấn mới trong mùa English Champion 2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
