import React, { useState } from 'react';
import './RoundsSection.css';

const RoundsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const roundsInfo = [
    {
      title: "Vòng 1: Thử thách Video",
      content: (
        <div className="round-details">
          <h3>13/03 đến 10/04/2026</h3>
          <p><strong>Bệ phóng Sáng tạo:</strong> Mở màn cuộc chiến, các đội thi sẽ tự do thể hiện cá tính thông qua lăng kính máy quay.</p>
          <ul className="round-list">
            <li><strong>Đề bài thiết kế:</strong> Sáng tạo 1 Video hoàn toàn bằng tiếng Anh (5 - 8 phút) xoay quanh chủ đề "Digital Economy". Không giới hạn định dạng (Vlog, Kịch, POV,...) - miễn là thông điệp của bạn chạm đến khán giả.</li>
            <li><strong>Dấu ấn cá nhân:</strong> Từng cá nhân trong bộ 5 thành viên đều phải "lên sóng" tỏa sáng tối thiểu 1 phút.</li>
          </ul>
          <p className="notice">Ngày 12/04, 08 "mảnh ghép" xuất sắc nhất sẽ lộ diện để chính thức bước vào Vòng Bán Kết.</p>
        </div>
      )
    },
    {
      title: "Vòng 2: Bản lĩnh Sân khấu",
      content: (
        <div className="round-details">
          <h3>12/04 đến 22/04/2026</h3>
          <p><strong>Đấu trí Chuyên môn:</strong> 08 đội bước vào giai đoạn nghiên cứu nước rút và tỏa sáng trên sân khấu Bán kết.</p>
          <ul className="round-list">
            <li><strong>Tranh tài (22/04 tại Hội trường A1):</strong> Các đội nhận chủ đề về Kinh tế số từ BTC, trình bày và bảo vệ quan điểm trước Hội đồng Giám khảo. Điểm số phụ thuộc 100% vào góc nhìn chuyên môn.</li>
            <li><strong>Đường đua Bình chọn (22/04 - 08/05):</strong> Bùng nổ trên Fanpage! Đội thi sở hữu tương tác khủng nhất sẽ ẵm trọn giải thưởng phụ và lập tức <strong>giắt túi +20 điểm</strong> cực kỳ lợi thế cho Đêm Chung kết.</li>
          </ul>
          <p className="notice">04 chiến binh xuất sắc nhất sẽ chính thức ghi danh mình vào Đêm Chung Kết lịch sử.</p>
        </div>
      )
    },
    {
      title: "Vòng 3: Đêm Chung Kết",
      content: (
        <div className="round-details">
          <h3>09/05/2026 tại Hội trường 700</h3>
          <p><strong>Vương miện Gọi tên:</strong> Đêm cống hiến rực lửa với 3 chặng đua siêu kinh điển dành cho Top 4.</p>
          <ul className="round-list">
            <li><strong>Chặng 1: Who is the talent?</strong> (Sân khấu hóa 3-5 phút). Giải quyết bài toán Bán kết qua nghệ thuật diễn xuất tiếng Anh. Đánh giá: 50% Nội dung, 30% Ngôn ngữ, 20% Trình diễn.</li>
            <li><strong>Chặng 2: Who is the fastest?</strong> Khám phá Chướng ngại vật bằng chuỗi câu hỏi tốc độ (Trắc nghiệm +10đ, Tự luận +15đ, Vượt rào +30đ). Nhận thêm 20đ nếu đạt giải Yêu thích nhất. Hai đội đỉnh nhất đi tiếp.</li>
            <li><strong>Chặng 3: Who is the winner?</strong> (Tranh biện - Debate). Hai phe Ủng hộ/Phản đối đối đầu trực tiếp qua 8 lượt nói chính (3p/lượt) và 2 lượt phản hồi. Áp dụng luật nảy lửa POI (Chất vấn đối thủ trực tiếp 30s).</li>
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
