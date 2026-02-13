import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LuArrowRight,
  LuActivity,
  LuDumbbell,
  LuSun,
  LuCircleDot,
  LuHand,
  LuPhone,
  LuClock,
  LuMapPin,
} from 'react-icons/lu';
import Hero from '../../components/Hero';
import CTABanner from '../../components/CTABanner';
import TestimonialsSection from '../../components/TestimonialsSection';
import './HomePage.scss';

// --- AboutPreview mini-component ---
function AboutPreview() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`AboutPreview ${isVisible ? 'AboutPreview--visible' : ''}`}
    >
      <div className="AboutPreview__container">
        <div className="AboutPreview__content">
          <div className="AboutPreview__indicator">
            <span className="AboutPreview__indicator-line"></span>
            <span className="AboutPreview__indicator-text">About Physica</span>
          </div>
          <h2 className="AboutPreview__title">
            Effective Therapy That Goes <em className="AboutPreview__title-accent">Beyond</em> Exercises
          </h2>
          <p className="AboutPreview__text">
            At Physica, Inc, we believe effective physical therapy goes beyond exercises.
            It's about restoring function, reducing pain, and improving quality of life
            through personalized, compassionate care. Whether you're recovering from
            surgery, managing chronic pain, or working to maintain independence — our
            team builds a treatment plan around your specific goals.
          </p>
          <Link to="/about" className="AboutPreview__link">
            <span>Learn More About Us</span>
            <LuArrowRight />
          </Link>
        </div>

        <div className="AboutPreview__image">
          <div className="AboutPreview__image-frame">
            <img
              src="https://hbconstruction.com/wp-content/uploads/2019/02/WEBNMJC-Allied-Health-Hi-Res-2-1920x1220.jpg"
              alt="Allied health facility with modern rehabilitation equipment"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// --- ServicesOverview mini-component ---
function ServicesOverview() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    { icon: LuActivity, title: 'Physical Therapy', id: 'physical-therapy', desc: 'Evidence-based rehabilitation to restore mobility, reduce pain, and rebuild strength.' },
    { icon: LuDumbbell, title: 'Personal Training', id: 'personal-training', desc: 'Custom fitness programs designed by certified trainers for lasting results.' },
    { icon: LuSun, title: 'Infrared Sauna & Red Light', id: 'infrared-sauna', desc: 'Advanced light therapy for deep tissue recovery and cellular rejuvenation.' },
    { icon: LuCircleDot, title: 'Cupping', id: 'cupping', desc: 'Traditional therapy to improve circulation, relieve tension, and accelerate healing.' },
    { icon: LuHand, title: 'Massage Therapy', id: 'massage-therapy', desc: 'Therapeutic massage techniques to release muscle tension and promote relaxation.' },
  ];

  return (
    <section
      ref={ref}
      className={`ServicesOverview ${isVisible ? 'ServicesOverview--visible' : ''}`}
    >
      <div className="ServicesOverview__container">
        <div className="ServicesOverview__header">
          <div className="ServicesOverview__indicator">
            <span className="ServicesOverview__indicator-line"></span>
            <span className="ServicesOverview__indicator-text">What We Offer</span>
          </div>
          <h2 className="ServicesOverview__title">
            Our <em className="ServicesOverview__title-accent">Services</em>
          </h2>
        </div>

        <div className="ServicesOverview__grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                to={`/services#${service.id}`}
                className="ServicesOverview__card"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <span className="ServicesOverview__card-number">0{index + 1}</span>
                <div className="ServicesOverview__card-icon">
                  <Icon />
                </div>
                <h3 className="ServicesOverview__card-title">{service.title}</h3>
                <p className="ServicesOverview__card-desc">{service.desc}</p>
                <span className="ServicesOverview__card-link">
                  Learn More <LuArrowRight />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="ServicesOverview__cta">
          <Link to="/services" className="ServicesOverview__cta-link">
            <span>View All Services</span>
            <LuArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

// --- QuickInfo mini-component ---
function QuickInfo() {
  return (
    <section className="QuickInfo">
      <div className="QuickInfo__container">
        <div className="QuickInfo__items">
          <div className="QuickInfo__item">
            <LuClock className="QuickInfo__item-icon" />
            <div className="QuickInfo__item-content">
              <span className="QuickInfo__item-label">Hours</span>
              <span className="QuickInfo__item-value">Mon-Fri 8 AM - 7 PM</span>
            </div>
          </div>

          <div className="QuickInfo__divider"></div>

          <div className="QuickInfo__item">
            <LuMapPin className="QuickInfo__item-icon" />
            <div className="QuickInfo__item-content">
              <span className="QuickInfo__item-label">Location</span>
              <span className="QuickInfo__item-value">17911 Sky Park Cir, Irvine</span>
            </div>
          </div>

          <div className="QuickInfo__divider"></div>

          <a href="tel:+19495025520" className="QuickInfo__item QuickInfo__item--link">
            <LuPhone className="QuickInfo__item-icon" />
            <div className="QuickInfo__item-content">
              <span className="QuickInfo__item-label">Phone</span>
              <span className="QuickInfo__item-value">(949) 502-5520</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

// --- Main HomePage ---
function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesOverview />
      <CTABanner />
      <TestimonialsSection />
      <QuickInfo />
    </>
  );
}

export default HomePage;
