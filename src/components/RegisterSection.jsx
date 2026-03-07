import React from 'react';
import { ExternalLink } from 'lucide-react';
import './RegisterSection.css';

const RegisterSection = () => {
  // Replace this link with your actual Google Form link
  const googleFormLink = "https://docs.google.com/forms/u/0/";

  return (
    <section id="register" className="section-padding register-section">
      <div className="container">
        <div className="register-container glass-panel fade-on-scroll">
          <div className="register-content text-center">
            <h2 className="register-title">Đăng Ký Tham Gia</h2>
            <div className="divider mx-auto" style={{ margin: '0 auto 1.5rem auto' }}></div>
            <p className="register-subtitle">
              Sẵn sàng để trở thành nhà vô địch năm nay? Nhấn vào nút bên dưới để chuyển đến trang điền thông tin Đăng ký chính thức của Ban tổ chức.
            </p>
            
            <div className="external-register-action" style={{ marginTop: '3rem', marginBottom: '2rem' }}>
              <a 
                href={googleFormLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-large pulse-animation"
                style={{ fontSize: '1.2rem', padding: '1.2rem 3rem' }}
              >
                ĐIẾN FORM ĐĂNG KÝ QUY THỨC
                <ExternalLink size={24} style={{ marginLeft: '12px' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
