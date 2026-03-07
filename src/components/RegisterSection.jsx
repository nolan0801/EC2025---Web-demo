import React, { useState } from 'react';
import { Send, Plus, Trash2 } from 'lucide-react';
import './RegisterSection.css';

const RegisterSection = () => {
  const [formData, setFormData] = useState({
    teamName: '',
    type: 'individual'
  });

  const [members, setMembers] = useState([
    { id: 1, fullName: '', email: '', phone: '', university: '' }
  ]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleTypeChange = (e) => {
    const newType = e.target.value;
    setFormData({ ...formData, type: newType });
    if (newType === 'individual') {
      setMembers([{ id: 1, fullName: '', email: '', phone: '', university: '' }]); // Reset to 1 member
    } else if (newType === 'team') {
      // Must have exactly 5 members for a team
      setMembers([
        { id: 1, fullName: '', email: '', phone: '', university: '' },
        { id: 2, fullName: '', email: '', phone: '', university: '' },
        { id: 3, fullName: '', email: '', phone: '', university: '' },
        { id: 4, fullName: '', email: '', phone: '', university: '' },
        { id: 5, fullName: '', email: '', phone: '', university: '' },
      ]);
    }
  };

  const handleMemberChange = (id, e) => {
    const { name, value } = e.target;
    setMembers(members.map(member =>
      member.id === id ? { ...member, [name]: value } : member
    ));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Thay đổi đường link URL_CUA_BAN bằng cái link Web app URL bạn copy được ở bước 3
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxIBl3XaCRt6gbv9Vif6pUDpMP1LTi8QjjVpWMKoEuV64fr-78l1fzQiqcTK-XTYeNm4A/exec';

    const payload = {
      type: formData.type,
      teamName: formData.teamName,
      members: members
    };

    try {
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(payload)
      });

      setIsSubmitting(false);
      setSuccess(true);
      setFormData({ teamName: '', type: 'individual' });
      setMembers([{ id: 1, fullName: '', email: '', phone: '', university: '' }]);
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error('Lỗi khi gửi dữ liệu:', error);
      setIsSubmitting(false);
      alert('Đã xảy ra lỗi, vui lòng thử lại sau.');
    }
  };


  return (
    <section id="register" className="section-padding register-section">
      <div className="container">
        <div className="register-container glass-panel fade-on-scroll">
          <div className="register-content">
            <h2 className="register-title">Đăng Ký Tham Gia</h2>
            <div className="divider" style={{ margin: '0 0 1.5rem 0' }}></div>
            <p className="register-subtitle">
              Sẵn sàng để trở thành nhà vô địch năm nay? Điền thông tin bên dưới để Ban tổ chức ghi nhận.
            </p>
          </div>

          <div className="register-form-wrapper">
            {success ? (
              <div className="success-message fade-in">
                <div className="success-icon">✓</div>
                <h3>Đăng ký thành công!</h3>
                <p>Thông tin của bạn đã được ghi nhận. Chúng tôi sẽ liên hệ trong thời gian sớm nhất.</p>
              </div>
            ) : (
              <form className="register-form" onSubmit={handleSubmit}>
                <div className="form-group main-type-group">
                  <label>Đăng ký dưới hình thức *</label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="type"
                        value="individual"
                        checked={formData.type === 'individual'}
                        onChange={handleTypeChange}
                      />
                      <span>Cá nhân</span>
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="type"
                        value="team"
                        checked={formData.type === 'team'}
                        onChange={handleTypeChange}
                      />
                      <span>Nhóm (5 người)</span>
                    </label>
                  </div>
                </div>

                {formData.type === 'team' && (
                  <div className="form-group slide-down">
                    <label htmlFor="teamName">Tên Nhóm *</label>
                    <input
                      type="text"
                      id="teamName"
                      name="teamName"
                      value={formData.teamName}
                      onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                      placeholder="Nhập tên đội thi của bạn"
                      required
                    />
                  </div>
                )}

                <div className="members-container">
                  {members.map((member, index) => (
                    <div key={member.id} className="member-card slide-down delay-100">
                      <div className="member-header">
                        <h4>{formData.type === 'individual' ? 'Thông tin cá nhân' : `Thành viên ${index + 1} ${index === 0 ? '(Nhóm trưởng)' : ''}`}</h4>
                      </div>

                      <div className="form-group">
                        <label>Họ và Tên *</label>
                        <input
                          type="text"
                          name="fullName"
                          value={member.fullName}
                          onChange={(e) => handleMemberChange(member.id, e)}
                          placeholder="Nhập họ và tên đầy đủ"
                          required
                        />
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label>Email *</label>
                          <input
                            type="email"
                            name="email"
                            value={member.email}
                            onChange={(e) => handleMemberChange(member.id, e)}
                            placeholder="vidu@student.edu.vn"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>Số điện thoại *</label>
                          <input
                            type="tel"
                            name="phone"
                            value={member.phone}
                            onChange={(e) => handleMemberChange(member.id, e)}
                            placeholder="0123456789"
                            required
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Trường Đại học *</label>
                        <input
                          type="text"
                          name="university"
                          value={member.university}
                          onChange={(e) => handleMemberChange(member.id, e)}
                          placeholder="VD: Học viện Tài chính"
                          required
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary submit-btn ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Đang gửi thông tin...' : (
                    <>
                      Gửi Đăng Ký <Send size={18} style={{ marginLeft: '8px' }} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
