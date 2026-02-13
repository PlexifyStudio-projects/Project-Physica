import { useEffect, useRef, useState } from 'react';
import { LuCheck } from 'react-icons/lu';
import './ProgramsSection.scss';

function ProgramsSection({ hideHeader = false }) {
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

  const programs = [
    'Faster, safer recovery for post-operative and post-acute patients',
    'Improve mobility and fall risk reduction for seniors',
    'Structured evidence-based care for Medicare and insured patients',
    'Functional rehabilitation for active adults and chronic conditions',
    'Return to activity programs',
  ];

  const tags = [
    'Post-Surgical Patients',
    'Seniors',
    'Athletes',
    'Medicare Patients',
    'Chronic Pain',
    'Active Adults',
  ];

  return (
    <section
      id="programs"
      ref={sectionRef}
      className={`ProgramsSection ${isVisible ? 'ProgramsSection--visible' : ''}`}
    >
      {/* Subtle background pattern */}
      <div className="ProgramsSection__pattern" aria-hidden="true"></div>

      <div className="ProgramsSection__container">
        {!hideHeader && (
          <div className="ProgramsSection__label-row">
            <span className="ProgramsSection__label-line"></span>
            <span className="ProgramsSection__label-text">Outpatient Programs</span>
            <span className="ProgramsSection__label-number">03</span>
          </div>
        )}

        {/* Two-column grid */}
        <div className="ProgramsSection__grid">
          {/* Left column - heading and description */}
          <div className="ProgramsSection__content">
            {!hideHeader ? (
              <h2 className="ProgramsSection__title">
                Programs Designed for{' '}
                <em className="ProgramsSection__title-accent">Real Results</em>
              </h2>
            ) : (
              <h2 className="ProgramsSection__title">
                Our Outpatient{' '}
                <em className="ProgramsSection__title-accent">Programs</em>
              </h2>
            )}
            <p className="ProgramsSection__description">
              Our outpatient programs are built on evidence-based practices and
              individualized care plans. Whether you are recovering from surgery,
              managing a chronic condition, or working toward long-term mobility,
              we design every program to get you back to the life you
              love — safely and effectively.
            </p>
          </div>

          {/* Right column - programs list */}
          <div className="ProgramsSection__list">
            {programs.map((program, index) => (
              <div
                key={index}
                className="ProgramsSection__item"
                style={{ animationDelay: `${0.12 * (index + 1)}s` }}
              >
                <div className="ProgramsSection__item-icon">
                  <LuCheck />
                </div>
                <p className="ProgramsSection__item-text">{program}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Programs image */}
        <div className="ProgramsSection__image">
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20230718/pngtree-contemporary-doctor-s-consultation-room-a-3d-rendering-of-a-professional-image_3900509.jpg"
            alt="Modern consultation room for patient evaluations"
            loading="lazy"
          />
        </div>

        {/* Who We Treat subsection */}
        <div className="ProgramsSection__who">
          <h3 className="ProgramsSection__who-title">Who We Treat</h3>
          <div className="ProgramsSection__tags">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="ProgramsSection__tag"
                style={{ animationDelay: `${0.08 * (index + 1) + 0.6}s` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection;
