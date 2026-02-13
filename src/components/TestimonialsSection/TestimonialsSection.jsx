import { useEffect, useRef, useState } from 'react';
import { LuQuote, LuStar, LuInstagram, LuMessageSquare } from 'react-icons/lu';
import './TestimonialsSection.scss';

function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: LuStar,
      title: 'Dedicated Therapists',
      text: 'Licensed specialists committed to your recovery journey every step of the way.',
    },
    {
      icon: LuMessageSquare,
      title: 'Personalized Care Plans',
      text: 'Every treatment is tailored to your unique goals, condition, and timeline.',
    },
    {
      icon: LuQuote,
      title: 'Patients Treated Daily',
      text: 'Trusted by our Irvine community for compassionate, one-on-one rehabilitation.',
    },
  ];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className={`TestimonialsSection ${isVisible ? 'TestimonialsSection--visible' : ''}`}
    >
      {/* Subtle background pattern */}
      <div className="TestimonialsSection__pattern" aria-hidden="true"></div>

      <div className="TestimonialsSection__container">
        {/* Section label row */}
        <div className="TestimonialsSection__label-row">
          <span className="TestimonialsSection__label-line"></span>
          <span className="TestimonialsSection__label-text">Testimonials</span>
          <span className="TestimonialsSection__label-number">07</span>
        </div>

        {/* Section title */}
        <h2 className="TestimonialsSection__title">
          What Our Patients{' '}
          <em className="TestimonialsSection__title-accent">Say</em>
        </h2>

        {/* Background image */}
        <div className="TestimonialsSection__image">
          <img
            src="https://www.shutterstock.com/image-photo/doctor-nurse-consulting-patient-hospital-260nw-2617737275.jpg"
            alt="Doctor consulting with patient in a caring environment"
            loading="lazy"
          />
        </div>

        {/* Central quote area */}
        <div className="TestimonialsSection__quote-block">
          <div className="TestimonialsSection__quote-icon" aria-hidden="true">
            <LuQuote />
          </div>

          <p className="TestimonialsSection__quote-message">
            We're proud of the care we provide. Patient stories coming soon.
          </p>

          <p className="TestimonialsSection__quote-submessage">
            Your experience matters to us
          </p>

          <div className="TestimonialsSection__quote-divider" aria-hidden="true"></div>

          {/* CTA links */}
          <div className="TestimonialsSection__cta-group">
            <a
              href="https://www.google.com/maps/place/Physica,+Inc./@33.6843394,-117.8432684,17z/"
              target="_blank"
              rel="noopener noreferrer"
              className="TestimonialsSection__cta-link"
            >
              <LuStar className="TestimonialsSection__cta-icon" />
              <span>Leave a Review on Google</span>
            </a>

            <a
              href="https://www.instagram.com/physica_inc/"
              target="_blank"
              rel="noopener noreferrer"
              className="TestimonialsSection__cta-link TestimonialsSection__cta-link--secondary"
            >
              <LuInstagram className="TestimonialsSection__cta-icon" />
              <span>Follow @PHYSICA_INC</span>
            </a>
          </div>
        </div>

        {/* Bottom highlights */}
        <div className="TestimonialsSection__highlights">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="TestimonialsSection__highlight"
                style={{ animationDelay: `${0.15 * (index + 1) + 0.4}s` }}
              >
                <div className="TestimonialsSection__highlight-icon">
                  <Icon />
                </div>
                <h3 className="TestimonialsSection__highlight-title">{item.title}</h3>
                <p className="TestimonialsSection__highlight-text">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
