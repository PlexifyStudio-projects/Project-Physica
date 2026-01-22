import { useState, useRef, useEffect } from 'react';
import {
  LuMapPin,
  LuPhone,
  LuMail,
  LuClock,
  LuArrowRight,
  LuSparkles,
  LuHeart,
  LuShield,
  LuCar,
  LuCalendar,
  LuMessageCircle
} from 'react-icons/lu';
import { FaWhatsapp } from 'react-icons/fa';
import './Contact.scss';

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const businessHours = [
    { day: 'Monday - Friday', hours: '7:00 AM - 7:00 PM', isOpen: true },
    { day: 'Saturday', hours: '8:00 AM - 4:00 PM', isOpen: true },
    { day: 'Sunday', hours: 'Closed', isOpen: false }
  ];

  const features = [
    { Icon: LuCar, text: 'Free Parking Available' },
    { Icon: LuShield, text: 'All Insurance Accepted' },
    { Icon: LuCalendar, text: 'Same-Day Appointments' },
    { Icon: LuHeart, text: 'Patient-Centered Care' }
  ];

  // WhatsApp number (replace with actual number)
  const whatsappNumber = '19491234567';
  const whatsappMessage = 'Hello! I would like to schedule an appointment at Physica Inc.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section ref={sectionRef} id="contact" className={`Contact ${isVisible ? 'Contact--visible' : ''}`}>
      {/* Background Elements */}
      <div className="Contact__bg">
        <div className="Contact__bg-gradient"></div>
        <div className="Contact__bg-pattern"></div>
        <div className="Contact__bg-orb Contact__bg-orb--1"></div>
        <div className="Contact__bg-orb Contact__bg-orb--2"></div>
      </div>

      <div className="Contact__container">
        {/* Header */}
        <header className="Contact__header">
          <span className="Contact__label">
            <LuSparkles />
            Get In Touch
          </span>
          <h2 className="Contact__title">
            Start Your <span className="Contact__title-accent">Recovery Journey</span> Today
          </h2>
          <p className="Contact__subtitle">
            Ready to take the first step? Contact us directly via phone or WhatsApp. Our friendly team is here to help you schedule your appointment.
          </p>
        </header>

        {/* Main Contact Options */}
        <div className="Contact__options">
          {/* Call Us Card */}
          <a href="tel:+19491234567" className="Contact__option-card Contact__option-card--call">
            <div className="Contact__option-icon">
              <LuPhone />
            </div>
            <div className="Contact__option-content">
              <span className="Contact__option-label">Call Us Now</span>
              <strong className="Contact__option-value">(949) 123-4567</strong>
              <span className="Contact__option-hint">Tap to call directly</span>
            </div>
            <LuArrowRight className="Contact__option-arrow" />
          </a>

          {/* WhatsApp Card */}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="Contact__option-card Contact__option-card--whatsapp">
            <div className="Contact__option-icon">
              <FaWhatsapp />
            </div>
            <div className="Contact__option-content">
              <span className="Contact__option-label">Message on WhatsApp</span>
              <strong className="Contact__option-value">Quick Response</strong>
              <span className="Contact__option-hint">Chat with us instantly</span>
            </div>
            <LuArrowRight className="Contact__option-arrow" />
          </a>
        </div>

        {/* Info Grid */}
        <div className="Contact__info-grid">
          {/* Location Card */}
          <div className="Contact__info-card Contact__info-card--location">
            <div className="Contact__info-header">
              <div className="Contact__info-icon">
                <LuMapPin />
              </div>
              <h3 className="Contact__info-title">Visit Our Clinic</h3>
            </div>
            <div className="Contact__info-body">
              <p className="Contact__address">
                17911 Sky Park Circle<br />
                Ste L & M<br />
                Irvine, CA 92614
              </p>
              <a
                href="https://maps.google.com/?q=17911+Sky+Park+Circle+Irvine+CA+92614"
                target="_blank"
                rel="noopener noreferrer"
                className="Contact__directions-btn"
              >
                <LuCar />
                Get Directions
                <LuArrowRight />
              </a>
            </div>
          </div>

          {/* Hours Card */}
          <div className="Contact__info-card Contact__info-card--hours">
            <div className="Contact__info-header">
              <div className="Contact__info-icon">
                <LuClock />
              </div>
              <h3 className="Contact__info-title">Business Hours</h3>
            </div>
            <div className="Contact__info-body">
              <div className="Contact__hours-list">
                {businessHours.map((schedule, index) => (
                  <div key={index} className={`Contact__hours-item ${!schedule.isOpen ? 'Contact__hours-item--closed' : ''}`}>
                    <span className="Contact__hours-day">{schedule.day}</span>
                    <span className="Contact__hours-time">
                      {schedule.isOpen && <span className="Contact__hours-dot"></span>}
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="Contact__info-card Contact__info-card--email">
            <div className="Contact__info-header">
              <div className="Contact__info-icon">
                <LuMail />
              </div>
              <h3 className="Contact__info-title">Email Us</h3>
            </div>
            <div className="Contact__info-body">
              <p className="Contact__email-text">For general inquiries</p>
              <a href="mailto:info@physicainc.com" className="Contact__email-link">
                info@physicainc.com
              </a>
              <span className="Contact__email-hint">We respond within 24 hours</span>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="Contact__features">
          {features.map((feature, index) => {
            const FeatureIcon = feature.Icon;
            return (
              <div key={index} className="Contact__feature">
                <div className="Contact__feature-icon">
                  <FeatureIcon />
                </div>
                <span className="Contact__feature-text">{feature.text}</span>
              </div>
            );
          })}
        </div>

        {/* Map Section */}
        <div className="Contact__map-section">
          <div className="Contact__map-wrapper">
            <div className="Contact__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.6989618716!2d-117.8516!3d33.6846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQxJzA0LjYiTiAxMTfCsDUxJzA1LjgiVw!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Physica Inc Location"
              ></iframe>
            </div>
            <div className="Contact__map-cta">
              <div className="Contact__map-cta-content">
                <LuMessageCircle className="Contact__map-cta-icon" />
                <div>
                  <h4 className="Contact__map-cta-title">Ready to Get Started?</h4>
                  <p className="Contact__map-cta-text">Contact us today and begin your path to recovery</p>
                </div>
              </div>
              <div className="Contact__map-cta-buttons">
                <a href="tel:+19491234567" className="Contact__map-btn Contact__map-btn--call">
                  <LuPhone />
                  <span>Call Now</span>
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="Contact__map-btn Contact__map-btn--whatsapp">
                  <FaWhatsapp />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
