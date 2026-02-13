import { Link } from 'react-router-dom';
import { LuPhone, LuArrowRight, LuMapPin, LuCalendarCheck, LuUsers, LuAward } from 'react-icons/lu';
import './Hero.scss';

function Hero() {
  return (
    <section className="Hero">
      {/* Background layers */}
      <div className="Hero__bg">
        <div className="Hero__bg-grain" aria-hidden="true"></div>
        <div className="Hero__bg-orb Hero__bg-orb--1" aria-hidden="true"></div>
        <div className="Hero__bg-orb Hero__bg-orb--2" aria-hidden="true"></div>
      </div>

      {/* Main content grid */}
      <div className="Hero__container">
        <div className="Hero__content">
          {/* Location badge */}
          <div className="Hero__badge">
            <LuMapPin />
            <span>Irvine, California</span>
          </div>

          {/* Headline */}
          <h1 className="Hero__heading">
            <span className="Hero__heading-line">Personalized Care</span>
            <span className="Hero__heading-line">
              for <em className="Hero__heading-accent">Movement</em>,
            </span>
            <span className="Hero__heading-line">Recovery &amp; Independence</span>
          </h1>

          {/* Subtext */}
          <p className="Hero__text">
            Evidence-based physical therapy combined with compassionate,
            one-on-one care — helping you regain strength and live without limitations.
          </p>

          {/* CTA Buttons */}
          <div className="Hero__cta">
            <a href="tel:+19495025520" className="Hero__btn Hero__btn--primary">
              <LuPhone />
              <span>Schedule a Visit</span>
              <LuArrowRight className="Hero__btn-arrow" />
            </a>
            <Link to="/services" className="Hero__btn Hero__btn--secondary">
              <span>Our Services</span>
              <LuArrowRight className="Hero__btn-arrow" />
            </Link>
          </div>
        </div>

        {/* Image side */}
        <div className="Hero__visual">
          <div className="Hero__image-frame">
            <img
              src="https://hbconstruction.com/wp-content/uploads/2019/07/Lovelace-Osuna_HB-10web-1920x1220.jpg"
              alt="Modern physical therapy clinic interior at Physica Inc"
              loading="eager"
            />
          </div>

          {/* Floating stats card */}
          <div className="Hero__stats-card">
            <div className="Hero__stat">
              <span className="Hero__stat-number">10+</span>
              <span className="Hero__stat-label">Years of Experience</span>
            </div>
            <div className="Hero__stat-divider"></div>
            <div className="Hero__stat">
              <span className="Hero__stat-number">5K+</span>
              <span className="Hero__stat-label">Patients Treated</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom trust bar */}
      <div className="Hero__trust-bar">
        <div className="Hero__trust-item">
          <LuCalendarCheck className="Hero__trust-icon" />
          <span>Mon–Fri 8AM–7PM</span>
        </div>
        <div className="Hero__trust-sep" aria-hidden="true"></div>
        <div className="Hero__trust-item">
          <LuAward className="Hero__trust-icon" />
          <span>Licensed Specialists</span>
        </div>
        <div className="Hero__trust-sep" aria-hidden="true"></div>
        <div className="Hero__trust-item">
          <LuUsers className="Hero__trust-icon" />
          <span>Insurance Accepted</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
