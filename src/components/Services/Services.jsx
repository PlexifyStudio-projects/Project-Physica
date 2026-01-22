import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  LuActivity,
  LuHeart,
  LuBrain,
  LuTarget,
  LuShield,
  LuUsers,
  LuZap,
  LuClock,
  LuArrowRight,
  LuSparkles,
  LuCircleCheck,
  LuCalendar
} from 'react-icons/lu';
import './Services.scss';

function Services() {
  const [activeService, setActiveService] = useState(0);
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

  const services = [
    {
      id: 'sports-rehabilitation',
      Icon: LuActivity,
      title: 'Sports Rehabilitation',
      shortDesc: 'Athletic recovery & performance',
      description: 'Evidence-based treatment protocols for athletes recovering from sports injuries. Our certified sports therapists use advanced techniques to optimize your recovery.',
      features: ['ACL/MCL Recovery', 'Rotator Cuff Rehab', 'Performance Training'],
      color: '#4A7C59'
    },
    {
      id: 'manual-therapy',
      Icon: LuUsers,
      title: 'Manual Therapy',
      shortDesc: 'Hands-on healing techniques',
      description: 'Specialized hands-on techniques to restore mobility, reduce pain, and improve tissue quality through joint mobilization and soft tissue work.',
      features: ['Joint Mobilization', 'Myofascial Release', 'Trigger Point Therapy'],
      color: '#5B8A72'
    },
    {
      id: 'orthopedic-therapy',
      Icon: LuTarget,
      title: 'Orthopedic Therapy',
      shortDesc: 'Musculoskeletal expertise',
      description: 'Comprehensive care for conditions affecting bones, joints, muscles, and tendons. Personalized treatment plans for acute and chronic conditions.',
      features: ['Joint Replacement', 'Fracture Rehab', 'Arthritis Care'],
      color: '#6B9B7A'
    },
    {
      id: 'neurological-rehab',
      Icon: LuBrain,
      title: 'Neurological Rehab',
      shortDesc: 'Restoring function & independence',
      description: 'Specialized rehabilitation for neurological conditions including stroke, Parkinson\'s, and MS. Focus on restoring independence and quality of life.',
      features: ['Stroke Recovery', 'Balance Training', 'Gait Rehabilitation'],
      color: '#4A7C59'
    },
    {
      id: 'chronic-pain',
      Icon: LuShield,
      title: 'Pain Management',
      shortDesc: 'Comprehensive pain relief',
      description: 'Multidisciplinary approach to chronic pain using therapeutic exercise, manual therapy, and patient education to improve quality of life.',
      features: ['Back Pain Relief', 'Neck Pain Care', 'Migraine Treatment'],
      color: '#5B8A72'
    },
    {
      id: 'geriatric-therapy',
      Icon: LuHeart,
      title: 'Geriatric Therapy',
      shortDesc: 'Age-specific rehabilitation',
      description: 'Specialized programs addressing the unique needs of older adults, focusing on balance, strength, mobility, and fall prevention.',
      features: ['Fall Prevention', 'Mobility Training', 'Strength Building'],
      color: '#6B9B7A'
    },
    {
      id: 'post-surgical',
      Icon: LuClock,
      title: 'Post-Surgical Care',
      shortDesc: 'Optimal surgical recovery',
      description: 'Guided recovery following orthopedic and spinal surgeries. We work with your surgeon to ensure optimal healing and functional restoration.',
      features: ['Joint Replacement', 'Spine Surgery', 'Arthroscopic Rehab'],
      color: '#4A7C59'
    },
    {
      id: 'vestibular',
      Icon: LuZap,
      title: 'Vestibular Therapy',
      shortDesc: 'Balance & dizziness treatment',
      description: 'Specialized treatment for dizziness, vertigo, and balance disorders. Our vestibular programs help restore equilibrium and reduce fall risk.',
      features: ['Vertigo Treatment', 'BPPV Care', 'Concussion Recovery'],
      color: '#5B8A72'
    }
  ];

  const featuredService = services[activeService];
  const FeaturedIcon = featuredService.Icon;

  return (
    <section ref={sectionRef} id="services" className={`Services ${isVisible ? 'Services--visible' : ''}`}>
      {/* Background Elements */}
      <div className="Services__bg">
        <div className="Services__bg-gradient"></div>
        <div className="Services__bg-pattern"></div>
      </div>

      <div className="Services__container">
        {/* Header Section */}
        <header className="Services__header">
          <span className="Services__label">Our Services</span>
          <h2 className="Services__title">
            Expert Physical Therapy
            <span className="Services__title-accent"> Services</span>
          </h2>
          <p className="Services__subtitle">
            Specialized rehabilitation programs tailored to your unique needs
          </p>
          <div className="Services__title-line"></div>
        </header>

        {/* Main Content - Two Column Layout */}
        <div className="Services__content">
          {/* Left - Featured Service Display */}
          <div className="Services__featured">
            <div className="Services__featured-card">
              <div className="Services__featured-header">
                <div className="Services__featured-icon">
                  <FeaturedIcon />
                </div>
                <div className="Services__featured-badge">
                  <LuSparkles />
                  <span>Featured</span>
                </div>
              </div>

              <h3 className="Services__featured-title">{featuredService.title}</h3>
              <p className="Services__featured-desc">{featuredService.description}</p>

              <div className="Services__featured-features">
                {featuredService.features.map((feature, idx) => (
                  <div key={idx} className="Services__featured-feature">
                    <LuCircleCheck />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Link to={`/services#${featuredService.id}`} className="Services__featured-btn">
                <span>Learn More</span>
                <LuArrowRight />
              </Link>
            </div>

            {/* Stats Row */}
            <div className="Services__stats">
              <div className="Services__stat">
                <span className="Services__stat-value">98%</span>
                <span className="Services__stat-label">Success Rate</span>
              </div>
              <div className="Services__stat">
                <span className="Services__stat-value">15+</span>
                <span className="Services__stat-label">Specialists</span>
              </div>
              <div className="Services__stat">
                <span className="Services__stat-value">24/7</span>
                <span className="Services__stat-label">Support</span>
              </div>
            </div>
          </div>

          {/* Right - Service Grid */}
          <div className="Services__grid">
            {services.map((service, index) => {
              const Icon = service.Icon;
              const isActive = index === activeService;

              return (
                <Link
                  key={service.id}
                  to={`/services#${service.id}`}
                  className={`Services__card ${isActive ? 'Services__card--active' : ''}`}
                  onMouseEnter={() => setActiveService(index)}
                >
                  <div className="Services__card-number">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="Services__card-icon">
                    <Icon />
                  </div>

                  <div className="Services__card-content">
                    <h4 className="Services__card-title">{service.title}</h4>
                    <p className="Services__card-desc">{service.shortDesc}</p>
                  </div>

                  <div className="Services__card-arrow">
                    <LuArrowRight />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="Services__cta">
          <div className="Services__cta-content">
            <h3 className="Services__cta-title">Ready to Start Your Recovery Journey?</h3>
            <p className="Services__cta-text">
              Schedule a consultation with our expert therapists and take the first step towards a healthier you.
            </p>
          </div>
          <div className="Services__cta-actions">
            <Link to="/contact" className="Services__cta-btn Services__cta-btn--primary">
              <LuCalendar />
              <span>Book Consultation</span>
            </Link>
            <Link to="/services" className="Services__cta-btn Services__cta-btn--secondary">
              <span>View All Services</span>
              <LuArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
