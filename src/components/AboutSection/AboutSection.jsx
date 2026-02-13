import { useEffect, useRef, useState } from 'react';
import { LuTarget, LuUsers, LuGraduationCap } from 'react-icons/lu';
import './AboutSection.scss';

function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: LuTarget,
      title: 'Evidence-Based',
      text: 'Every treatment plan is built on proven clinical methods and the latest rehabilitation research.'
    },
    {
      icon: LuUsers,
      title: 'One-on-One Care',
      text: 'You work directly with your therapist — no assistants, no hand-offs, no crowded gym sessions.'
    },
    {
      icon: LuGraduationCap,
      title: 'Licensed Specialists',
      text: 'Our team holds advanced certifications in orthopedic, geriatric, and sports rehabilitation.'
    }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`AboutSection ${isVisible ? 'AboutSection--visible' : ''}`}
    >
      {/* Background decoration */}
      <div className="AboutSection__bg-accent"></div>

      <div className="AboutSection__container">
        {/* Top row - intro */}
        <div className="AboutSection__intro">
          <div className="AboutSection__intro-label">
            <span className="AboutSection__intro-line"></span>
            <span className="AboutSection__intro-text">About Physica</span>
            <span className="AboutSection__intro-number">01</span>
          </div>

          <div className="AboutSection__intro-content">
            <h2 className="AboutSection__title">
              Effective Therapy That Goes <em className="AboutSection__title-accent">Beyond</em> Exercises
            </h2>
            <div className="AboutSection__intro-split">
              <p className="AboutSection__lead">
                At Physica, Inc, we believe effective physical therapy goes beyond exercises.
                It's about restoring function, reducing pain, and improving quality of life
                through personalized, compassionate care.
              </p>
              <p className="AboutSection__text">
                Whether you're recovering from surgery, managing chronic pain, returning to
                athletics, or working to maintain independence as you age — our team builds
                a treatment plan around your specific goals, timeline, and body. We address
                root causes, not just symptoms.
              </p>
            </div>
          </div>
        </div>

        {/* Image + values row */}
        <div className="AboutSection__grid">
          <div className="AboutSection__image">
            <div className="AboutSection__image-frame">
              <img
                src="https://wallpapers.com/images/hd/hospital-pictures-h70p8kqvxzfh3g7f.jpg"
                alt="Professional medical clinic environment"
                loading="lazy"
              />
              <div className="AboutSection__image-accent"></div>
            </div>
          </div>

          <div className="AboutSection__values">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="AboutSection__value"
                  style={{ animationDelay: `${0.15 * (index + 1)}s` }}
                >
                  <div className="AboutSection__value-icon">
                    <Icon />
                  </div>
                  <div className="AboutSection__value-content">
                    <h3 className="AboutSection__value-title">{value.title}</h3>
                    <p className="AboutSection__value-text">{value.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
