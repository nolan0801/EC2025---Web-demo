import React from 'react';
import { Phone, Mail, Facebook, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/logo-only.png" alt="Logo" />
            <span>English Champion 2026</span>
          </div>
          <p className="footer-desc">
            Cuộc thi kỹ năng tiếng Anh thường niên do Câu lạc bộ Thủ lĩnh trẻ Học viện Tài chính tổ chức.
          </p>
        </div>

        <div className="footer-contact">
          <h3>Thông tin liên hệ</h3>
          <ul className="contact-list">
            <li>
              <Phone size={18} className="text-accent" />
              <div>
                <span>034 234 6162 (Chi)</span><br/>
                <span>086 568 0166 (Việt)</span>
              </div>
            </li>
            <li>
              <Mail size={18} className="text-accent" />
              <span>clbthulinhtre@hvtc.edu.vn</span>
            </li>
            <li>
              <MapPin size={18} className="text-accent" />
              <span>Học viện Tài chính, 58 Lê Văn Hiến, Bắc Từ Liêm, HN</span>
            </li>
            <li>
              <Facebook size={18} className="text-accent" />
              <a href="https://www.facebook.com/englishchampion.ylc" target="_blank" rel="noreferrer">
                Fanpage English Champion
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container text-center">
          <p>&copy; 2026 English Champion - YLC Học viện Tài chính. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
