import { useEffect, useRef, useState } from 'react';
import {
  LuShield,
  LuFileText,
  LuCreditCard,
  LuPhone
} from 'react-icons/lu';
import './InsuranceSection.scss';

function InsuranceSection({ hideHeader = false }) {
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

  const cards = [
    {
      icon: LuShield,
      title: 'Insurance Accepted',
      description:
        'We work with most major insurance providers including Medicare. Contact us to verify your specific coverage.'
    },
    {
      icon: LuFileText,
      title: 'Direct Billing',
      description:
        'We handle insurance billing directly so you can focus on your recovery, not paperwork.'
    },
    {
      icon: LuCreditCard,
      title: 'Flexible Options',
      description:
        'We offer various payment options to ensure you receive the care you need.'
    }
  ];

  return (
    <section
      id="insurance"
      ref={sectionRef}
      className={`InsuranceSection ${isVisible ? 'InsuranceSection--visible' : ''}`}
    >
      <div className="InsuranceSection__container">
        {!hideHeader && (
          <header className="InsuranceSection__header">
            <div className="InsuranceSection__indicator">
              <span className="InsuranceSection__indicator-line"></span>
              <span className="InsuranceSection__indicator-label">Coverage</span>
            </div>

            <h2 className="InsuranceSection__title">
              Insurance & <em className="InsuranceSection__title-accent">Payment</em>
            </h2>

            <p className="InsuranceSection__subtitle">
              We accept most major insurance plans and are committed to making
              quality physical therapy accessible.
            </p>
          </header>
        )}

        {/* Cards grid */}
        <div className="InsuranceSection__grid">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <article
                key={index}
                className="InsuranceSection__card"
                style={{ animationDelay: `${0.15 * (index + 1)}s` }}
              >
                <div className="InsuranceSection__card-icon">
                  <Icon />
                </div>
                <h3 className="InsuranceSection__card-title">{card.title}</h3>
                <p className="InsuranceSection__card-text">{card.description}</p>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="InsuranceSection__cta">
          <p className="InsuranceSection__cta-text">Questions about coverage?</p>
          <a href="tel:+19495025520" className="InsuranceSection__cta-btn">
            <LuPhone />
            <span>Call (949) 502-5520</span>
          </a>
        </div>

        {/* Note */}
        <p className="InsuranceSection__note">
          Please call ahead to verify your insurance coverage before your first appointment.
        </p>
      </div>
    </section>
  );
}

export default InsuranceSection;
