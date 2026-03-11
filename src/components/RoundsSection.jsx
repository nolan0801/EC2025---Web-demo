import React, { useState } from 'react';
import './RoundsSection.css';

const RoundsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const roundsInfo = [
    {
      title: "Vòng 1: Vòng Sơ loại",
      content: (
        <div className="round-details">
          <h3>13/03 đến 10/04/2026</h3>
          <p><strong>Hình thức:</strong> Nộp 1 video giới thiệu đội và trình bày về chủ đề "Digital Economy".</p>
          <ul className="round-list">
            <li><strong>Yêu cầu:</strong> Video 100% tiếng Anh, dài 5 - 8 phút. Hình thức tự do (pov, vlog, kịch,...).</li>
            <li><strong>Quy định:</strong> Bắt buộc 5 thành viên đều xuất hiện, mỗi người nói tối thiểu 1 phút.</li>
          </ul>
          <p className="notice">08 đội thi cao điểm nhất sẽ bước tiếp vào Vòng Bán kết.</p>
        </div>
      )
    },
    {
      title: "Vòng 2: Vòng Bán kết",
      content: (
        <div className="round-details">
          <h3>12/04 đến 22/04/2026</h3>
          <p><strong>Nội dung chủ đạo:</strong> Nhận chủ đề từ BTC, nghiên cứu và chuẩn bị thuyết trình.</p>
          <ul className="round-list">
            <li><strong>Đêm Bán kết (22/04 tại HT A1):</strong> Các đội thuyết trình và bảo vệ lượng điểm trước Ban Giám khảo. Điểm số 100% do Giám khảo quyết định.</li>
            <li><strong>Bình chọn (22/04 - 08/05):</strong> Bình chọn Đội thi yêu thích nhất trên Fanpage. Đội chiến thắng nhận thưởng và được <strong>cộng 20 điểm</strong> vào Chặng 2 của đêm Chung kết.</li>
          </ul>
          <p className="notice">04 đội thi xuất sắc nhất sẽ tiến vào Đêm Chung kết.</p>
        </div>
      )
    },
    {
      title: "Vòng 3: Đêm Chung kết",
      content: (
        <div className="round-details">
          <h3>09/05/2026 tại Hội trường 700</h3>
          <p><strong>Cấu trúc Đêm thi:</strong> Gồm 3 chặng thi xác định Quán quân.</p>
          <ul className="round-list">
            <li><strong>Chặng 1: Who is the talent?</strong> Sân khấu hóa bằng tiếng Anh (3-5 phút). Tiêu chí: Nội dung (50%), Ngôn ngữ (30%), Điễn xuất (20%).</li>
            <li><strong>Chặng 2: Who is the fastest?</strong> Giải ô chữ. Trắc nghiệm (+10đ), Tự luận (+15đ), Sai (-15đ), Giải Chướng ngại vật (+30đ). Đội yêu thích nhất (+20đ). Chọn ra 2 đội cao điểm nhất.</li>
            <li><strong>Chặng 3: Who is the winner?</strong> Tranh biện (Debate). Chọn phe bốc thăm. Gồm 8 lượt nói chính (3p/lượt) và 2 lượt phản hồi (2p/lượt). Có quyền chất vấn (POI) tối đa 30s.</li>
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
