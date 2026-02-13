import { useEffect, useRef, useState } from 'react';
import {
  LuClock,
  LuPhone,
  LuMapPin,
  LuCalendarCheck
} from 'react-icons/lu';
import './HoursSection.scss';

function HoursSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const today = new Date().getDay();

  const hours = [
    { day: 'Monday', hours: '8:00 AM - 7:00 PM', isOpen: true, dayIndex: 1 },
    { day: 'Tuesday', hours: '8:00 AM - 5:00 PM', isOpen: true, dayIndex: 2 },
    { day: 'Wednesday', hours: '8:00 AM - 7:00 PM', isOpen: true, dayIndex: 3 },
    { day: 'Thursday', hours: '8:00 AM - 5:00 PM', isOpen: true, dayIndex: 4 },
    { day: 'Friday', hours: '8:00 AM - 5:00 PM', isOpen: true, dayIndex: 5 },
    { day: 'Saturday', hours: 'Closed', isOpen: false, dayIndex: 6 },
    { day: 'Sunday', hours: 'Closed', isOpen: false, dayIndex: 0 },
  ];

  return (
    <section
      id="hours"
      ref={sectionRef}
      className={`HoursSection ${isVisible ? 'HoursSection--visible' : ''}`}
    >
      <div className="HoursSection__container">
        {/* Section header */}
        <header className="HoursSection__header">
          <div className="HoursSection__indicator">
            <span className="HoursSection__indicator-line"></span>
            <span className="HoursSection__indicator-label">Visit Us</span>
          </div>

          <h2 className="HoursSection__title">
            Business <em className="HoursSection__title-accent">Hours</em>
          </h2>

          <p className="HoursSection__subtitle">
            We're here when you need us. Plan your visit and schedule
            your appointment at our Irvine clinic.
          </p>
        </header>

        {/* Split layout */}
        <div className="HoursSection__grid">
          {/* Left: Hours table card */}
          <div className="HoursSection__table-wrapper">
            <div className="HoursSection__table-header">
              <LuClock className="HoursSection__table-header-icon" />
              <h3 className="HoursSection__table-heading">Weekly Schedule</h3>
            </div>

            <div className="HoursSection__table">
              {hours.map((item, index) => (
                <div
                  key={index}
                  className={`HoursSection__row ${
                    item.dayIndex === today ? 'HoursSection__row--today' : ''
                  } ${!item.isOpen ? 'HoursSection__row--closed' : ''}`}
                >
                  <span className="HoursSection__row-day">
                    {item.isOpen && (
                      <span className="HoursSection__row-dot"></span>
                    )}
                    {!item.isOpen && (
                      <span className="HoursSection__row-dot HoursSection__row-dot--closed"></span>
                    )}
                    {item.day}
                    {item.dayIndex === today && (
                      <span className="HoursSection__row-badge">Today</span>
                    )}
                  </span>
                  <span className="HoursSection__row-hours">
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Plan Your Visit card */}
          <div className="HoursSection__visit-card">
            <div className="HoursSection__visit-accent" aria-hidden="true"></div>

            <div className="HoursSection__visit-header">
              <LuCalendarCheck className="HoursSection__visit-header-icon" />
              <h3 className="HoursSection__visit-heading">Plan Your Visit</h3>
            </div>

            <p className="HoursSection__visit-text">
              Schedule your appointment at our comfortable Irvine clinic.
              Walk-ins are welcome, but we recommend calling ahead to
              ensure availability.
            </p>

            <div className="HoursSection__visit-details">
              <div className="HoursSection__visit-item">
                <LuMapPin className="HoursSection__visit-item-icon" />
                <div className="HoursSection__visit-item-content">
                  <span className="HoursSection__visit-item-label">Address</span>
                  <span className="HoursSection__visit-item-value">
                    17911 Sky Park Cir, Suites L&amp;M
                    <br />
                    Irvine, CA 92614
                  </span>
                </div>
              </div>

              <div className="HoursSection__visit-item">
                <LuPhone className="HoursSection__visit-item-icon" />
                <div className="HoursSection__visit-item-content">
                  <span className="HoursSection__visit-item-label">Phone</span>
                  <a
                    href="tel:+19495025520"
                    className="HoursSection__visit-item-value HoursSection__visit-item-value--link"
                  >
                    (949) 502-5520
                  </a>
                </div>
              </div>
            </div>

            <a href="tel:+19495025520" className="HoursSection__visit-cta">
              <LuPhone />
              <span>Call to Schedule</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HoursSection;
