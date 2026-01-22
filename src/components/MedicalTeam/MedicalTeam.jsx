import { useState, useRef, useEffect } from 'react';
import { LuPhone, LuMail, LuAward, LuUsers, LuHeart, LuStar, LuLinkedin, LuArrowRight } from 'react-icons/lu';
import './MedicalTeam.scss';

function MedicalTeam() {
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

  const ceo = {
    id: 1,
    name: 'Ivan Duarte',
    credentials: 'DPT, OCS, FAAOMPT',
    role: 'Founder & CEO',
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&dpr=2',
    yearsWithUs: 'Founder - Since 2015',
    specialty: 'Orthopedic & Sports Rehabilitation',
    bio: 'Dr. Ivan Duarte is a visionary leader in physical therapy, founding Physica Inc with a mission to transform rehabilitation care. As a board-certified orthopedic specialist and Fellow of the American Academy of Orthopaedic Manual Physical Therapists, he brings over 15 years of clinical excellence and innovation to every aspect of our practice.',
    philosophy: '"Our mission is simple: restore function, renew hope, and return our patients to the lives they love."',
    achievements: ['15+ Years Experience', '5000+ Patients Treated', 'Award-Winning Care'],
    email: 'ivan.duarte@physicainc.com'
  };

  const team = [
    {
      id: 2,
      name: 'Sarah Mitchell',
      credentials: 'PTA, CPT',
      role: 'Lead Physical Therapist Assistant',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2',
      yearsWithUs: 'Since 2021',
      specialty: 'Therapeutic Exercise & Patient Care',
      bio: 'Licensed PTA specializing in therapeutic exercise programs and patient education.'
    },
    {
      id: 3,
      name: 'Michael Rodriguez',
      credentials: 'OTD, CHT',
      role: 'Occupational Therapist',
      image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2',
      yearsWithUs: 'Since 2019',
      specialty: 'Hand Therapy & ADL Training',
      bio: 'Certified hand therapist with doctorate in occupational therapy.'
    },
    {
      id: 4,
      name: 'Emily Chen',
      credentials: 'RN, BSN',
      role: 'Head Nurse',
      image: 'https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2',
      yearsWithUs: 'Since 2022',
      specialty: 'Patient Assessment & Care',
      bio: 'Experienced RN providing comprehensive patient assessments and care coordination.'
    },
    {
      id: 5,
      name: 'James Thompson',
      credentials: 'MS, CSCS',
      role: 'Sports Medicine Specialist',
      image: 'https://images.pexels.com/photos/6455925/pexels-photo-6455925.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2',
      yearsWithUs: 'Since 2018',
      specialty: 'Athletic Performance',
      bio: 'Certified strength and conditioning specialist with masters in sports medicine.'
    },
    {
      id: 6,
      name: 'Maria Gonzalez',
      credentials: 'LMT, NCTMB',
      role: 'Lead Massage Therapist',
      image: 'https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2',
      yearsWithUs: 'Since 2021',
      specialty: 'Therapeutic Massage',
      bio: 'Nationally certified massage therapist specializing in medical massage.'
    },
    {
      id: 7,
      name: 'David Park',
      credentials: 'MS, CEP',
      role: 'Exercise Physiologist',
      image: 'https://images.pexels.com/photos/6740756/pexels-photo-6740756.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2',
      yearsWithUs: 'Since 2020',
      specialty: 'Clinical Exercise',
      bio: 'Clinical exercise physiologist designing evidence-based exercise programs.'
    },
    {
      id: 8,
      name: 'Lisa Anderson',
      credentials: 'BS, CPC',
      role: 'Patient Care Coordinator',
      image: 'https://images.pexels.com/photos/7176305/pexels-photo-7176305.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2',
      yearsWithUs: 'Since 2019',
      specialty: 'Patient Experience',
      bio: 'Dedicated coordinator ensuring seamless patient experience.'
    }
  ];

  return (
    <section ref={sectionRef} id="team" className={`MedicalTeam ${isVisible ? 'MedicalTeam--visible' : ''}`}>
      {/* Background Elements */}
      <div className="MedicalTeam__bg">
        <div className="MedicalTeam__bg-gradient"></div>
        <div className="MedicalTeam__bg-pattern"></div>
        <div className="MedicalTeam__bg-orb MedicalTeam__bg-orb--1"></div>
        <div className="MedicalTeam__bg-orb MedicalTeam__bg-orb--2"></div>
      </div>

      <div className="MedicalTeam__container">
        {/* Header */}
        <header className="MedicalTeam__header">
          <span className="MedicalTeam__label">Our Team</span>
          <h2 className="MedicalTeam__title">
            Meet the <span className="MedicalTeam__title-accent">Experts</span> Behind Your Recovery
          </h2>
          <p className="MedicalTeam__subtitle">
            Our distinguished team combines decades of experience with cutting-edge expertise to deliver exceptional patient care
          </p>
          <div className="MedicalTeam__title-line"></div>
        </header>

        {/* CEO Featured Section */}
        <div className="MedicalTeam__ceo-section">
          <div className="MedicalTeam__ceo-card">
            <div className="MedicalTeam__ceo-image-wrapper">
              <div className="MedicalTeam__ceo-image-frame">
                <img
                  src={ceo.image}
                  alt={ceo.name}
                  className="MedicalTeam__ceo-image"
                />
                <div className="MedicalTeam__ceo-image-overlay"></div>
              </div>
              <div className="MedicalTeam__ceo-badge">
                <LuStar />
                <span>Founder & CEO</span>
              </div>
            </div>

            <div className="MedicalTeam__ceo-content">
              <div className="MedicalTeam__ceo-header">
                <div className="MedicalTeam__ceo-name-block">
                  <h3 className="MedicalTeam__ceo-name">{ceo.name}</h3>
                  <span className="MedicalTeam__ceo-credentials">{ceo.credentials}</span>
                </div>
                <div className="MedicalTeam__ceo-since">{ceo.yearsWithUs}</div>
              </div>

              <div className="MedicalTeam__ceo-specialty">
                <LuAward />
                <span>{ceo.specialty}</span>
              </div>

              <p className="MedicalTeam__ceo-bio">{ceo.bio}</p>

              <blockquote className="MedicalTeam__ceo-quote">
                {ceo.philosophy}
              </blockquote>

              <div className="MedicalTeam__ceo-achievements">
                {ceo.achievements.map((achievement, index) => (
                  <div key={index} className="MedicalTeam__ceo-achievement">
                    <LuHeart />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>

              <div className="MedicalTeam__ceo-actions">
                <a href={`mailto:${ceo.email}`} className="MedicalTeam__ceo-btn MedicalTeam__ceo-btn--primary">
                  <LuMail />
                  <span>Contact Dr. Duarte</span>
                </a>
                <a href="tel:+1234567890" className="MedicalTeam__ceo-btn MedicalTeam__ceo-btn--secondary">
                  <LuPhone />
                  <span>Schedule Consultation</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Team Stats */}
        <div className="MedicalTeam__stats">
          <div className="MedicalTeam__stat">
            <span className="MedicalTeam__stat-value">8</span>
            <span className="MedicalTeam__stat-label">Expert Specialists</span>
          </div>
          <div className="MedicalTeam__stat">
            <span className="MedicalTeam__stat-value">50+</span>
            <span className="MedicalTeam__stat-label">Years Combined Experience</span>
          </div>
          <div className="MedicalTeam__stat">
            <span className="MedicalTeam__stat-value">15K+</span>
            <span className="MedicalTeam__stat-label">Patients Helped</span>
          </div>
          <div className="MedicalTeam__stat">
            <span className="MedicalTeam__stat-value">98%</span>
            <span className="MedicalTeam__stat-label">Patient Satisfaction</span>
          </div>
        </div>

        {/* Section Divider */}
        <div className="MedicalTeam__divider">
          <span className="MedicalTeam__divider-text">
            <LuUsers />
            Our Dedicated Team
          </span>
        </div>

        {/* Team Grid */}
        <div className="MedicalTeam__grid">
          {team.map((member, index) => (
            <div key={member.id} className="MedicalTeam__card" style={{ '--delay': `${index * 0.1}s` }}>
              <div className="MedicalTeam__card-image-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="MedicalTeam__card-image"
                />
                <div className="MedicalTeam__card-overlay">
                  <a href="tel:+1234567890" className="MedicalTeam__card-cta">
                    <LuPhone />
                    <span>Book Now</span>
                  </a>
                </div>
              </div>

              <div className="MedicalTeam__card-content">
                <div className="MedicalTeam__card-header">
                  <h4 className="MedicalTeam__card-name">{member.name}</h4>
                  <span className="MedicalTeam__card-credentials">{member.credentials}</span>
                </div>

                <div className="MedicalTeam__card-role">{member.role}</div>
                <div className="MedicalTeam__card-specialty">{member.specialty}</div>

                <p className="MedicalTeam__card-bio">{member.bio}</p>

                <div className="MedicalTeam__card-footer">
                  <span className="MedicalTeam__card-since">{member.yearsWithUs}</span>
                  <LuArrowRight className="MedicalTeam__card-arrow" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="MedicalTeam__bottom-cta">
          <div className="MedicalTeam__bottom-cta-content">
            <h3 className="MedicalTeam__bottom-cta-title">Ready to Start Your Recovery Journey?</h3>
            <p className="MedicalTeam__bottom-cta-text">
              Our expert team is here to help you achieve your health goals
            </p>
          </div>
          <a href="tel:+1234567890" className="MedicalTeam__bottom-cta-btn">
            <LuPhone />
            <span>Schedule Your Appointment</span>
            <LuArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

export default MedicalTeam;
