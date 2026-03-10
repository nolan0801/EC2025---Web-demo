import React, { useState } from 'react';
import './RoundsSection.css';

const RoundsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const roundsInfo = [
    {
      title: "Vòng Sơ Loại",
      content: (
        <div className="round-details">
          <h3>12/03 đến 03/04/2026</h3>
          <p><strong>Hình thức thi:</strong> Quay 1 video ngắn giới thiệu về đội và chủ đề "Digital Economy".</p>
          <ul className="round-list">
            <li><strong>Yêu cầu Video:</strong> Thời lượng từ 5 đến 8 phút, 100% bằng tiếng Anh. Hình thức thể hiện tự do (pov, vlog, kịch,...).</li>
            <li><strong>Tiêu chí xuất hiện:</strong> Mỗi thành viên trong đội bắt buộc phải lên hình ít nhất 1 phút.</li>
          </ul>
          <p className="notice">Kết quả được công bố ngày 04/04. 8 đội có điểm số cao nhất sẽ bước tiếp vào vòng Bán Kết.</p>
        </div>
      )
    },
    {
      title: "Vòng Bán Kết",
      content: (
        <div className="round-details">
          <h3>22/04/2026 tại Hội trường A1</h3>
          <p><strong>Nội dung:</strong> Nghiên cứu và thuyết trình chuyên môn về nền Kinh tế số.</p>
          <ul className="round-list">
            <li><strong>Thuyết trình:</strong> Trình bày phần thi trước Ban Giám khảo. Kết quả 100% phụ thuộc vào góc nhìn chuyên môn của BGK. Chọn ra 4 đội xuất sắc nhất vào Chung Kết.</li>
            <li><strong>Hoạt động phụ (Bình chọn):</strong> Từ 22/04 - 08/05/2026 trên Fanpage. Đội được bình chọn cao nhất (Like + Comment + Share) sẽ nhận thưởng và <strong>được cộng 20 điểm</strong> vào Chặng 2 của đêm Chung kết.</li>
          </ul>
          <p className="notice">4 đội đạt điểm cao nhất sẽ chính thức chạm tay vào tấm vé Chung kết.</p>
        </div>
      )
    },
    {
      title: "Vòng Chung Kết",
      content: (
        <div className="round-details">
          <h3>09/05/2026 tại Hội trường 700</h3>
          <p>Đêm vinh danh bùng nổ gồm 3 chặng thi rực lửa để tìm ra Quán quân.</p>
          <ul className="round-list">
            <li><strong>Chặng 1 (Who is the talent?):</strong> Sân khấu hóa (3-5 phút) giải quyết đề bài vòng Bán Kết bằng tiếng Anh. (Nội dung 50%, Ngôn ngữ 30%, Kỹ năng 20%).</li>
            <li><strong>Chặng 2 (Who is the fastest?):</strong> Giải ô chữ - Trắc nghiệm - Tự luận. Trả lời đúng nhận +10/+15 điểm, đoán Chướng ngại vật được +30 điểm. (Đội được yêu thích nhất được +20 điểm tại vòng này). Chọn ra Top 2 cao điểm nhất đi tiếp.</li>
            <li><strong>Chặng 3 (Who is the winner?):</strong> Tranh biện (Debate). Có 8 lượt nói chính (3 phút/lượt) và 2 lượt phản hồi (2 phút/lượt). Cho phép Point of Information (POI - Chất vấn đối thủ) tối đa 30s.</li>
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
