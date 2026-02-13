import { useEffect, useRef, useState } from 'react';
import {
  LuCalendarCheck,
  LuClipboardList,
  LuFileText,
  LuActivity,
  LuTrendingUp
} from 'react-icons/lu';
import './PatientJourney.scss';

function PatientJourney() {
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

  const steps = [
    {
      icon: LuCalendarCheck,
      title: 'Schedule',
      description:
        'Call us or request an appointment. We\'ll find a time that works for your schedule.'
    },
    {
      icon: LuClipboardList,
      title: 'Initial Evaluation',
      description:
        'Your therapist will assess your condition, mobility, pain levels, and functional goals.'
    },
    {
      icon: LuFileText,
      title: 'Treatment Plan',
      description:
        'We design a personalized, evidence-based care plan tailored to your specific needs.'
    },
    {
      icon: LuActivity,
      title: 'Therapy Sessions',
      description:
        'One-on-one sessions with your licensed therapist. Hands-on care, every visit.'
    },
    {
      icon: LuTrendingUp,
      title: 'Recovery & Results',
      description:
        'Track your progress and celebrate milestones as you return to the life you love.'
    }
  ];

  return (
    <section
      id="journey"
      ref={sectionRef}
      className={`PatientJourney ${isVisible ? 'PatientJourney--visible' : ''}`}
    >
      <div className="PatientJourney__container">
        {/* Section header */}
        <header className="PatientJourney__header">
          <div className="PatientJourney__indicator">
            <span className="PatientJourney__indicator-line"></span>
            <span className="PatientJourney__indicator-label">What to Expect</span>
          </div>

          <h2 className="PatientJourney__title">
            Your Path to <em className="PatientJourney__title-accent">Recovery</em>
          </h2>

          <p className="PatientJourney__subtitle">
            From your first call to lasting results, every step is guided by
            expert care and personalized attention.
          </p>
        </header>

        {/* Timeline stepper */}
        <div className="PatientJourney__timeline">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="PatientJourney__step"
                style={{ animationDelay: `${0.18 * (index + 1)}s` }}
              >
                {/* Connecting line (not on last step) */}
                {index < steps.length - 1 && (
                  <span
                    className="PatientJourney__connector"
                    aria-hidden="true"
                    style={{ animationDelay: `${0.18 * (index + 1) + 0.3}s` }}
                  ></span>
                )}

                {/* Numbered circle with icon */}
                <div className="PatientJourney__step-circle">
                  <span className="PatientJourney__step-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="PatientJourney__step-icon">
                    <Icon />
                  </div>
                </div>

                {/* Step content */}
                <div className="PatientJourney__step-content">
                  <h3 className="PatientJourney__step-title">{step.title}</h3>
                  <p className="PatientJourney__step-description">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PatientJourney;
