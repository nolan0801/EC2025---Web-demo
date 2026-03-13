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
          <h3>CUỘC THI ENGLISH CHAMPION</h3>
          <ul className="contact-list">
            <li>
              <Facebook size={18} className="text-accent" />
              <a href="https://www.facebook.com/englishchampion.ylc/" target="_blank" rel="noreferrer">
                Fanpage English Champion
              </a>
            </li>
            <li>
              <Mail size={18} className="text-accent" />
              <span>ylchvtc@gmail.com</span>
            </li>
            <li>
              <Phone size={18} className="text-accent" />
              <div>
                <span>➤ Ms. Nguyên (President): 0916111738</span><br/>
                <span>➤ Ms. Yến (Head of Media Department): 0378022204</span>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h3>CLB THỦ LĨNH TRẺ HỌC VIỆN TÀI CHÍNH - YLC</h3>
          <ul className="contact-list">
            <li>
              <Facebook size={18} className="text-accent" />
              <a href="https://www.facebook.com/ylc.aof/" target="_blank" rel="noreferrer">
                Fanpage YLC
              </a>
            </li>
            <li>
              <Mail size={18} className="text-accent" />
              <span>ylchvtc@gmail.com</span>
            </li>
            <li>
              <Phone size={18} className="text-accent" />
              <div>
                <span>➤ Ms. Nguyên (President): 0916111738</span><br/>
                <span>➤ Ms. Yến (Head of Media Department): 0378022204</span>
              </div>
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
