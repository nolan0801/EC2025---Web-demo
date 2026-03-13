import React, { useState } from 'react';
import { Download } from 'lucide-react';
import './RoundsSection.css';

const RoundsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const roundsInfo = [
    {
      title: "Vòng 1: Sơ loại",
      content: (
        <div className="round-details">
          <h3>Nội dung và Cách thức thi</h3>
          <p><strong>Hình thức:</strong> Thể hiện thông qua video giới thiệu ngắn của đội thi.</p>
          <ul className="round-list">
            <li><strong>Video ngắn:</strong> Các thí sinh tiến hành quay video nhóm giới thiệu về chủ đề do Ban Tổ chức đề ra liên quan tới "Digital Economy" và giới thiệu về các thành viên trong đội của mình.</li>
            <li><strong>Yêu cầu video:</strong> Thời lượng từ 5 phút đến 8 phút. Các thành viên xuất hiện trong cùng một video, mỗi thành viên nói tối thiểu 1 phút để đảm bảo chất lượng đồng đều.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Vòng 2: Thuyết trình",
      content: (
        <div className="round-details">
          <h3>Nội dung và Cách thức thi</h3>
          <p><strong>Hình thức:</strong> Thuyết trình về chủ đề liên quan tới "Kinh tế số".</p>
          <ul className="round-list">
            <li>Các đội vượt qua Vòng Sơ loại sẽ được bốc thăm chủ đề và chuẩn bị bài thuyết trình trước Ban Giám khảo.</li>
            <li>Các đội thi cần thể hiện khả năng nghiên cứu chuyên sâu, làm việc nhóm và kỹ năng thuyết trình bằng tiếng Anh một cách lưu loát, thuyết phục.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Vòng 3: Chung kết",
      content: (
        <div className="round-details">
          <h3>Nội dung và Cách thức thi</h3>
          <p><strong>Cấu trúc Đêm thi:</strong> Bao gồm 3 chặng thi cam go để xác định ngôi vị Quán quân.</p>
          <ul className="round-list">
            <li><strong>Chặng 1 - Who is the talent?:</strong> Sân khấu hóa để thể hiện tài năng và kiến thức.</li>
            <li><strong>Chặng 2 - Who is the fastest?:</strong> Trả lời nhanh các câu hỏi hàng ngang và tìm "Chướng ngại vật" liên quan đến chủ đề kinh tế số.</li>
            <li><strong>Chặng 3 - Who is the winner?:</strong> Tranh biện (Debate) căng thẳng giữa các đội mạnh nhất để tìm ra nhà vô địch với Luật Tranh biện cụ thể từ BTC.</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <section id="rounds" className="section-padding rounds-section">
      <div className="container">
        <div className="section-header text-center fade-on-scroll">
          <h2 className="section-title">Thể lệ <span className="text-accent">Cuộc thi</span></h2>
          <div className="divider"></div>
        </div>

        <div className="rounds-container fade-on-scroll delay-100">
          <div className="rounds-tabs">
            {roundsInfo.map((round, index) => (
              <button 
                key={index}
                className={`round-tab ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {round.title}
              </button>
            ))}
          </div>

          <div className="round-content-area glass-panel">
            {roundsInfo[activeTab].content}
            <div className="text-center mt-md" style={{ marginTop: '2rem' }}>
              <a 
                href="https://drive.google.com/file/d/1JFxbK7_XBudJAg3HiiRHd2bc6sQ_la6_/view" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}
              >
                <Download size={20} />
                BOOKLET CUỘC THI
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoundsSection;
