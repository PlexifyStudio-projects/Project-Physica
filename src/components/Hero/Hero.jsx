import { useState, useEffect, useRef } from 'react';
import {
  LuArrowRight,
  LuPhone,
  LuStar,
  LuUsers,
  LuAward,
  LuActivity,
  LuHeart,
  LuShield,
  LuCalendarCheck
} from 'react-icons/lu';
import './Hero.scss';

function Hero() {
  const [yearsCount, setYearsCount] = useState(0);
  const [patientsCount, setPatientsCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);
  const heroRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      setHasAnimated(true);
      animateCounter(setYearsCount, 23, 1500);
      animateCounter(setPatientsCount, 23400, 1500);
      animateCounter(setSatisfactionCount, 96, 1500);
    }
  }, [hasAnimated]);

  const animateCounter = (setter, target, duration) => {
    const startTime = Date.now();
    const updateCounter = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setter(Math.floor(easeOutQuart * target));
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setter(target);
      }
    };
    requestAnimationFrame(updateCounter);
  };

  return (
    <section ref={heroRef} className="Hero">
      {/* Background Image */}
      <div className="Hero__bg">
        <img
          src="https://uchealth-wp-uploads.s3.amazonaws.com/wp-content/uploads/sites/4/2017/01/02160624/uch.jpg"
          alt="Modern medical facility"
          className="Hero__bg-img"
        />
        <div className="Hero__bg-overlay"></div>

        {/* Floating Cards over image */}
        <div className="Hero__cards">
          <div className="Hero__card Hero__card--1">
            <div className="Hero__card-icon">
              <LuActivity />
            </div>
            <div className="Hero__card-text">
              <span className="Hero__card-title">Sports Rehab</span>
              <span className="Hero__card-desc">Athletic recovery</span>
            </div>
          </div>

          <div className="Hero__card Hero__card--2">
            <div className="Hero__card-icon">
              <LuHeart />
            </div>
            <div className="Hero__card-text">
              <span className="Hero__card-title">Pain Relief</span>
              <span className="Hero__card-desc">Chronic care</span>
            </div>
          </div>

          <div className="Hero__card Hero__card--3">
            <div className="Hero__card-icon">
              <LuShield />
            </div>
            <div className="Hero__card-text">
              <span className="Hero__card-title">Post-Surgery</span>
              <span className="Hero__card-desc">Full recovery</span>
            </div>
          </div>

          <div className="Hero__card Hero__card--4">
            <div className="Hero__card-icon Hero__card-icon--accent">
              <LuCalendarCheck />
            </div>
            <div className="Hero__card-text">
              <span className="Hero__card-title">Open Today</span>
              <span className="Hero__card-desc">8am - 6pm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="Hero__wrapper">
        <div className="Hero__main">
          <span className="Hero__label">Physical Therapy Excellence</span>

          <h1 className="Hero__heading">
            Your Journey to <br />
            <span className="Hero__heading-accent">Recovery</span> Begins Here
          </h1>

          <p className="Hero__text">
            Personalized care from board-certified specialists using
            advanced techniques for your optimal health and mobility.
          </p>

          {/* Stats Row */}
          <div className="Hero__stats">
            <div className="Hero__stat">
              <span className="Hero__stat-value">{yearsCount}+</span>
              <span className="Hero__stat-name">Years</span>
            </div>
            <div className="Hero__stat">
              <span className="Hero__stat-value">{patientsCount.toLocaleString()}+</span>
              <span className="Hero__stat-name">Patients</span>
            </div>
            <div className="Hero__stat">
              <span className="Hero__stat-value">{satisfactionCount}%</span>
              <span className="Hero__stat-name">Satisfaction</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="Hero__cta">
            <a href="tel:+1234567890" className="Hero__btn Hero__btn--primary">
              <LuPhone />
              <span>Book Appointment</span>
              <LuArrowRight className="Hero__btn-arrow" />
            </a>
            <a href="#services" className="Hero__btn Hero__btn--secondary">
              Our Services
            </a>
          </div>

          {/* Trust Row */}
          <div className="Hero__trust">
            <div className="Hero__trust-item">
              <LuAward />
              <span>Award Winning</span>
            </div>
            <div className="Hero__trust-item">
              <LuStar />
              <span>4.9 Rating</span>
            </div>
            <div className="Hero__trust-item">
              <LuUsers />
              <span>Expert Team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
