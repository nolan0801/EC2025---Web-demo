import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Ngày: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Giờ: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Phút: Math.floor((difference / 1000 / 60) % 60),
        Giây: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { Ngày: 0, Giờ: 0, Phút: 0, Giây: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="countdown-container delay-200 animate-fade-up">
      <div className="countdown-title">Thời gian đăng ký còn lại:</div>
      <div className="countdown-timer">
        {Object.keys(timeLeft).map((interval, i) => (
          <div key={i} className="countdown-item glass-panel pulse-animation-soft">
            <span className="countdown-value">
              {timeLeft[interval].toString().padStart(2, '0')}
            </span>
            <span className="countdown-label">{interval}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
