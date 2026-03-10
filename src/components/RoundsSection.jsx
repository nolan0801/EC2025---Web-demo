import React, { useState } from 'react';
import './RoundsSection.css';

const RoundsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const roundsInfo = [
    {
      title: "Vòng Sơ Loại",
      content: (
        <div className="round-details">
          <h3>07/03 đến 30/03/2026</h3>
          <p><strong>Hình thức thi:</strong> Đăng ký theo nhóm 5 người và nộp Video thuyết trình.</p>
          <ul className="round-list">
            <li><strong>Yêu cầu Video:</strong> Thời lượng từ 2 đến 4 phút, bằng tiếng Anh.</li>
            <li><strong>Chủ đề:</strong> Các vấn đề liên quan đến Kinh tế Số (Digital Economy).</li>
            <li><strong>Tiêu chí:</strong> Mỗi thành viên trong nhóm bắt buộc xuất hiện và nói tối thiểu 40 giây.</li>
          </ul>
          <p className="notice">8 đội thi (40 thí sinh) cao điểm nhất sẽ bước tiếp vào vòng Bán Kết.</p>
        </div>
      )
    },
    {
      title: "Vòng Bán Kết",
      content: (
        <div className="round-details">
          <h3>22/04/2026 tại HT D201</h3>
          <p><strong>Nội dung:</strong> Đi sâu nghiên cứu và thuyết trình về chủ đề bốc thăm từ BTC.</p>
          <ul className="round-list">
            <li><strong>Hồ sơ:</strong> Nộp 1 bản Word nghiên cứu (tối đa 10 trang) & file PowerPoint trước 20h ngày 20/04.</li>
            <li><strong>Thuyết trình:</strong> Trực tiếp trên sân khấu (Tối đa 7 phút).</li>
            <li><strong>Phản biện:</strong> Trả lời Q&A từ Hội đồng Giám khảo (Tối đa 5 phút).</li>
          </ul>
          <p className="notice">4 đội đạt điểm cao nhất sẽ nắm tay nhau bước vào đêm Chung kết.</p>
        </div>
      )
    },
    {
      title: "Vòng Chung Kết",
      content: (
        <div className="round-details">
          <h3>09/05/2026 tại Hội trường 700</h3>
          <p>Đêm vinh danh bùng nổ để tìm ra ngôi vị Quán quân English Champion 2026.</p>
          <ul className="round-list">
            <li><strong>Hoạt động phụ:</strong> Bình chọn "Đội thi được yêu thích nhất" trên Fanpage từ 26/04.</li>
            <li><strong>Chặng 1 (Who is the talent?):</strong> 3-5 phút giới thiệu và sân khấu hóa bằng tiếng Anh.</li>
            <li><strong>Chặng 2 (Who is faster?):</strong> Giải mã ô chữ giấu chướng ngại vật về Kinh tế Số.</li>
            <li><strong>Chặng 3 (Debate):</strong> Tranh biện kịch tính trực tiếp giữa Top xuất sắc nhất.</li>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoundsSection;
