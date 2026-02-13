import { useEffect, useRef, useState } from 'react';
import {
  LuUsers,
  LuBrain,
  LuLayoutGrid,
  LuHeartHandshake
} from 'react-icons/lu';
import './WhyChooseUs.scss';

function WhyChooseUs() {
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

  const features = [
    {
      icon: LuUsers,
      title: 'One-on-One Treatment',
      description:
        'Every session is with a licensed therapist. No aides, no group sessions \u2014 just personalized, focused care.'
    },
    {
      icon: LuBrain,
      title: 'Evidence-Based Approach',
      description:
        'Our treatments are rooted in the latest clinical research and proven rehabilitation techniques.'
    },
    {
      icon: LuLayoutGrid,
      title: 'Comprehensive Services',
      description:
        'From physical therapy to infrared sauna and massage therapy, all your recovery needs under one roof.'
    },
    {
      icon: LuHeartHandshake,
      title: 'Patient-First Philosophy',
      description:
        'We take the time to understand your goals, your limitations, and build a plan that works for your life.'
    }
  ];

  return (
    <section
      id="why-choose-us"
      ref={sectionRef}
      className={`WhyChooseUs ${isVisible ? 'WhyChooseUs--visible' : ''}`}
    >
      <div className="WhyChooseUs__container">
        {/* Section header */}
        <header className="WhyChooseUs__header">
          <div className="WhyChooseUs__indicator">
            <span className="WhyChooseUs__indicator-line"></span>
            <span className="WhyChooseUs__indicator-label">Our Difference</span>
          </div>

          <h2 className="WhyChooseUs__title">
            Why Choose <em className="WhyChooseUs__title-accent">Physica</em>
          </h2>

          <p className="WhyChooseUs__subtitle">
            We believe recovery should be personal, effective, and built
            around you. Here is what sets us apart.
          </p>
        </header>

        {/* Image + features layout */}
        <div className="WhyChooseUs__image-block">
          <img
            src="https://i.pinimg.com/736x/e8/b2/93/e8b293eb7fd23bc58980afbd7134ac01.jpg"
            alt="Healthcare professionals providing patient care"
            loading="lazy"
          />
        </div>

        {/* 2x2 feature grid */}
        <div className="WhyChooseUs__grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article
                key={index}
                className="WhyChooseUs__card"
                style={{ animationDelay: `${0.15 * (index + 1)}s` }}
              >
                {/* Decorative corner accent */}
                <span className="WhyChooseUs__card-accent" aria-hidden="true"></span>

                <div className="WhyChooseUs__card-icon">
                  <Icon />
                </div>

                <h3 className="WhyChooseUs__card-title">{feature.title}</h3>
                <p className="WhyChooseUs__card-text">{feature.description}</p>

                {/* Bottom decorative line */}
                <span className="WhyChooseUs__card-line" aria-hidden="true"></span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
