import React from 'react';
import { Calendar, Flag, PlayCircle, Award, Mic, Users, Trophy } from 'lucide-react';
import './TimelineSection.css';

const TimelineSection = () => {
  const events = [
    {
      date: '12.03',
      title: 'Lễ\nPhát động',
      description: 'Lễ phát động cuộc thi English Champion 2026.',
      icon: <PlayCircle size={24} />
    },
    {
      date: '13.03 - 10.04',
      title: 'Vòng\nSơ Loại',
      description: 'Mở đơn đăng ký và bài kiểm tra đánh giá năng lực.',
      icon: <Users size={24} />
    },
    {
      date: '12.04 - 22.04',
      title: 'Vòng\nBán Kết',
      description: 'Nghiên cứu và thuyết trình về chủ đề đã cho.',
      icon: <Mic size={24} />
    },
    {
      date: '09.05',
      title: 'Chung Kết',
      description: 'Đêm chung kết kịch tính tìm ra nhà vô địch.',
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
