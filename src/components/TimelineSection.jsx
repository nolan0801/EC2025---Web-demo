import React from 'react';
import { Calendar, Flag, PlayCircle, Award, Mic, Users, Trophy } from 'lucide-react';
import './TimelineSection.css';

const TimelineSection = () => {
  const events = [
    {
      date: '15.04 - 20.04',
      title: 'Khởi động',
      description: 'Truyền thông online cuộc thi và thu thập dữ liệu Đại sứ.',
      icon: <Flag size={24} />
    },
    {
      date: '21.04',
      title: 'Phát động\nCuộc thi',
      description: 'Lễ phát động cuộc thi English Champion 2025.',
      icon: <PlayCircle size={24} />
    },
    {
      date: '22.04 - 09.05',
      title: 'Mở đơn\nĐăng ký',
      description: 'Truyền thông giảng đường kết hợp online trên toàn Hà Nội.',
      icon: <Users size={24} />
    },
    {
      date: '13.05',
      title: 'Công bố\nVòng 1',
      description: 'Công bố kết quả vòng sơ loại 1.',
      icon: <Award size={24} />
    },
    {
      date: '20.05',
      title: 'Vòng 2: Thuyết trình',
      description: 'Vòng Bán kết - Thuyết trình về chủ đề đã cho.',
      icon: <Mic size={24} />
    },
    {
      date: '29.05',
      title: 'Chung Kết',
      description: 'Vòng 3: Đêm chung kết kịch tính tìm ra nhà vô địch.',
      icon: <Trophy size={24} />
    }
  ];

  return (
    <section id="timeline" className="section-padding timeline-section">
      <div className="container">
        <div className="section-header text-center fade-on-scroll">
          <h2 className="section-title">Lịch trình <span className="text-accent">Cuộc thi</span></h2>
          <div className="divider"></div>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          {events.map((event, index) => (
            <div 
              key={index} 
              className={`timeline-item fade-on-scroll delay-${(index % 3) * 100} ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-dot">
                <div className="timeline-icon">{event.icon}</div>
              </div>
              <div className="timeline-content glass-panel">
                <div className="timeline-date">
                  <Calendar size={18} className="text-accent"/> 
                  <span>{event.date}</span>
                </div>
                <h3 className="timeline-title">
                  {event.title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < event.title.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
                <p className="timeline-desc">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
