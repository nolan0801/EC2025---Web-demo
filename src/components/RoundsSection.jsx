import React, { useState } from 'react';
import './RoundsSection.css';

const RoundsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const roundsInfo = [
    {
      title: "Vòng Sơ Loại",
      content: (
        <div className="round-details">
          <h3>20/04 đến 10/05/2025</h3>
          <p><strong>Hình thức thi:</strong> Video giới thiệu ngắn và bài kiểm tra đánh giá năng lực.</p>
          <ul className="round-list">
            <li><strong>Chặng 1 (Video):</strong> Cá nhân (1p30s - 2p) hoặc nhóm 5 người (mỗi thành viên nói 40s). Chủ đề: Circular Economy.</li>
            <li><strong>Chặng 2 (Minitest):</strong> 30 phút làm bài (10 câu trắc nghiệm, 1 đoạn văn ngắn).</li>
          </ul>
          <p className="notice">8 đội thi (40 thí sinh) cao điểm nhất sẽ bước tiếp vào vòng 2.</p>
        </div>
      )
    },
    {
      title: "Vòng Bán Kết",
      content: (
        <div className="round-details">
          <h3>16/05 đến 20/05/2025</h3>
          <p><strong>Nội dung:</strong> Nghiên cứu và thuyết trình về chủ đề chung liên quan "Circular Economy".</p>
          <ul className="round-list">
            <li>Cần chuẩn bị 1 bản Word nghiên cứu (tối đa 10 trang) nộp trước 18/05.</li>
            <li>Thuyết trình bằng PowerPoint trong đêm Bán kết (20/05).</li>
            <li>Thời lượng: 7 phút thuyết trình + 5 phút trả lời câu hỏi của BGK.</li>
          </ul>
          <p className="notice">4 đội đạt điểm cao nhất sẽ bước vào vòng Chung kết.</p>
        </div>
      )
    },
    {
      title: "Vòng Chung Kết",
      content: (
        <div className="round-details">
          <h3>29/05/2025 - Hội trường 700</h3>
          <p>Vòng thi kịch tính nhất quyết định ngôi vị Quán quân.</p>
          <ul className="round-list">
            <li><strong>Bình chọn ảnh:</strong> Trên fanpage để nhận điểm thưởng.</li>
            <li><strong>Chặng 1 (Who is the talent?):</strong> 3-5 phút giới thiệu và sân khấu hóa bằng tiếng Anh.</li>
            <li><strong>Chặng 2 (Who is faster?):</strong> Giải mã ô chữ giấu chướng ngại vật về Kinh tế tuần hoàn.</li>
            <li><strong>Chặng 3 (Who is the winner?):</strong> Tranh biện (Debate) trực tiếp giữa top 2.</li>
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
          <p className="section-subtitle">
            Chi tiết 3 vòng thi đầy thử thách và sáng tạo.
          </p>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoundsSection;
