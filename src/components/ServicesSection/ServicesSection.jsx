import { useEffect, useRef, useState } from 'react';
import {
  LuActivity,
  LuDumbbell,
  LuSun,
  LuCircleDot,
  LuHand,
  LuPhone
} from 'react-icons/lu';
import './ServicesSection.scss';

function ServicesSection({ hideHeader = false }) {
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

  const services = [
    {
      id: 'physical-therapy',
      icon: LuActivity,
      number: '01',
      title: 'Physical Therapy',
      description:
        'Evidence-based rehabilitation tailored to your condition. We restore mobility and function through targeted therapeutic exercises, manual techniques, and individualized treatment plans designed for lasting results.'
    },
    {
      id: 'personal-training',
      icon: LuDumbbell,
      number: '02',
      title: 'Personal Training',
      description:
        'Customized fitness programs designed to build strength, improve endurance, and support long-term health. Whether you\'re post-rehab or pursuing peak performance, we meet you where you are.'
    },
    {
      id: 'infrared-sauna',
      icon: LuSun,
      number: '03',
      title: 'Infrared Sauna & Red Light Therapy',
      description:
        'Advanced light-based therapies that promote deep tissue healing, reduce inflammation, relieve chronic pain, and accelerate recovery — all through non-invasive, natural methods.'
    },
    {
      id: 'cupping',
      icon: LuCircleDot,
      number: '04',
      title: 'Cupping',
      description:
        'Traditional therapeutic technique that improves blood flow, relieves muscle tension, reduces inflammation, and supports the body\'s natural healing process.'
    },
    {
      id: 'massage-therapy',
      icon: LuHand,
      number: '05',
      title: 'Massage Therapy',
      description:
        'Professional therapeutic massage integrated into your care plan. Reduces pain, releases tension, improves circulation, and enhances overall recovery and well-being.'
    }
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`ServicesSection ${isVisible ? 'ServicesSection--visible' : ''}`}
    >
      <div className="ServicesSection__container">
        {!hideHeader && (
          <header className="ServicesSection__header">
            <div className="ServicesSection__indicator">
              <span className="ServicesSection__indicator-line"></span>
              <span className="ServicesSection__indicator-label">What We Offer</span>
            </div>

            <h2 className="ServicesSection__title">
              Our <em className="ServicesSection__title-accent">Services</em>
            </h2>

            <p className="ServicesSection__subtitle">
              Comprehensive, integrated care designed to help you move better,
              feel better, and live without limitations.
            </p>
          </header>
        )}

        {/* Services card grid */}
        <div className="ServicesSection__grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={index}
                id={service.id}
                className="ServicesSection__card"
                style={{ animationDelay: `${0.12 * (index + 1)}s` }}
              >
                <span className="ServicesSection__card-number" aria-hidden="true">
                  {service.number}
                </span>

                <div className="ServicesSection__card-icon">
                  <Icon />
                </div>

                <h3 className="ServicesSection__card-title">{service.title}</h3>
                <p className="ServicesSection__card-text">{service.description}</p>
              </article>
            );
          })}
        </div>

        {/* Bottom call-to-action */}
        <div className="ServicesSection__cta">
          <p className="ServicesSection__cta-text">Ready to start?</p>
          <a href="tel:+19495025520" className="ServicesSection__cta-btn">
            <LuPhone />
            <span>Call (949) 502-5520</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
