import React from 'react';
import '../assets/scss/calendar.scss';

const DateSelector = () => {
  const scrollContainer = React.useRef(null);

  const scrollLeft = () => {
    scrollContainer.current.scrollBy({ left: -150, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainer.current.scrollBy({ left: 150, behavior: 'smooth' });
  };
  const dates = [
    { day: 'Hôm nay', date: '13 Thg 10 2024' },
    { day: 'Ngày mai', date: '14 Thg 10 2024' },
    { day: 'Thứ Ba', date: '15 Thg 10 2024' },
    { day: 'Thứ Tư', date: '16 Thg 10 2024' },

  ];
  return (
     <div className="date-selector">
      <button className="nav-btn prev" onClick={scrollLeft}>‹</button>
      <div className="date-items" ref={scrollContainer}>
        {dates.map((date, index) => (
          <div 
            className="date-item" 
            key={index} 
            
          >
            <span className="day">{date.day}</span>
            <span className="date">{date.date}</span>
          </div>
        ))}
      </div>
      <button className="nav-btn next" onClick={scrollRight}>›</button>
    </div> 
  );
};

export default DateSelector;