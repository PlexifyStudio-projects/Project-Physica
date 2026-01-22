import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Hero from '../../components/Hero';
import './HomePage.scss';
import {
  LuStethoscope,
  LuHeart,
  LuMicroscope,
  LuUsers,
  LuShieldCheck,
  LuCalendar,
  LuActivity,
  LuBrain,
  LuFlaskConical,
  LuArrowRight,
  LuChevronLeft,
  LuChevronRight,
  LuPhone,
  LuClipboardList,
  LuBriefcase
} from 'react-icons/lu';
import SportsRehabilitationImg from '../../assets/Sports-Rehabilitation.png';
import ManualTherapyImg from '../../assets/Manual-Therapy.png';
import OrthopedicPhysicalTherapyImg from '../../assets/Orthopedic-Physical-}Therapy.png';
import NeurologicalRehabilitationImg from '../../assets/Neurological-Rehabilitation.png';
import PostSurgicalRecoveryImg from '../../assets/Post-Surgical-Recovery.png';
import ChronicPainManagementImg from '../../assets/Chronic-Pain-Management.png';
import GeriatricPhysicalTherapyImg from '../../assets/Geriatric-Physical-Therapy.png';
import BalanceFallPreventionImg from '../../assets/Balance-&-Fall-Prevention.png';

function HomePage() {
  const whyChooseRef = useRef(null);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [typedText1, setTypedText1] = useState('');
  const [typedText2, setTypedText2] = useState('');
  const [hasStartedTyping, setHasStartedTyping] = useState(false);

  const fullText1 = "Our purpose is to provide excellent physical therapy services and we consider our patients as strategic partners in their journey to recovery.";
  const fullText2 = "We understand that the only way to build long-term relationships is by achieving your complete satisfaction. That's why we have certified therapists with over 15 years of experience, state-of-the-art technology, and personalized attention that guarantees proven results.";

  useEffect(() => {
    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -50px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('HomePage__why-choose--visible');
          if (!hasStartedTyping) {
            setHasStartedTyping(true);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (whyChooseRef.current) {
      observer.observe(whyChooseRef.current);
    }

    return () => {
      if (whyChooseRef.current) {
        observer.unobserve(whyChooseRef.current);
      }
    };
  }, [hasStartedTyping]);

  // Typewriter effect
  useEffect(() => {
    if (!hasStartedTyping) return;

    let index1 = 0;
    let index2 = 0;
    const speed = 15; // milliseconds per character

    // Type first paragraph
    const typeText1 = () => {
      if (index1 <= fullText1.length) {
        setTypedText1(fullText1.slice(0, index1));
        index1++;
        setTimeout(typeText1, speed);
      } else {
        // Start typing second paragraph after first is done
        typeText2();
      }
    };

    // Type second paragraph
    const typeText2 = () => {
      if (index2 <= fullText2.length) {
        setTypedText2(fullText2.slice(0, index2));
        index2++;
        setTimeout(typeText2, speed);
      }
    };

    typeText1();
  }, [hasStartedTyping]);

  const servicesOverview = [
    {
      icon: <LuActivity />,
      title: 'Sports Rehabilitation',
      description: 'Recovery and performance optimization for athletes',
      image: SportsRehabilitationImg
    },
    {
      icon: <LuUsers />,
      title: 'Manual Therapy',
      description: 'Personalized hands-on treatment helping patients restore mobility and reduce pain in a clinical setting',
      image: ManualTherapyImg
    },
    {
      icon: <LuActivity />,
      title: 'Orthopedic Physical Therapy',
      description: 'Expert care for patients recovering from musculoskeletal injuries with evidence-based treatment protocols',
      image: OrthopedicPhysicalTherapyImg
    },
    {
      icon: <LuBrain />,
      title: 'Neurological Rehabilitation',
      description: 'Compassionate support for patients with neurological conditions through specialized therapeutic interventions',
      image: NeurologicalRehabilitationImg
    },
    {
      icon: <LuHeart />,
      title: 'Post-Surgical Recovery',
      description: 'Comprehensive rehabilitation programs guiding patients through safe and effective post-operative recovery',
      image: PostSurgicalRecoveryImg
    },
    {
      icon: <LuShieldCheck />,
      title: 'Chronic Pain Management',
      description: 'Advanced therapeutic strategies helping patients achieve long-term relief from persistent pain conditions',
      image: ChronicPainManagementImg
    },
    {
      icon: <LuHeart />,
      title: 'Geriatric Physical Therapy',
      description: 'Dedicated care for elderly patients focusing on mobility, balance, and maintaining independence',
      image: GeriatricPhysicalTherapyImg
    },
    {
      icon: <LuActivity />,
      title: 'Balance & Fall Prevention',
      description: 'Specialized programs helping patients improve stability and prevent falls through targeted therapy',
      image: BalanceFallPreventionImg
    }
  ];

  const whyChooseUs = {
    title: 'What makes us different from other physical therapy clinics?',
    images: [
      {
        url: 'https://images.pexels.com/photos/4506105/pexels-photo-4506105.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
        title: 'Manual Therapy',
        description: 'Hands-on techniques for pain relief'
      },
      {
        url: 'https://images.pexels.com/photos/5473186/pexels-photo-5473186.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
        title: 'Rehabilitation Exercises',
        description: 'Guided movements to restore strength'
      },
      {
        url: 'https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
        title: 'Spinal Treatment',
        description: 'Expert care for back and neck pain'
      },
      {
        url: 'https://images.pexels.com/photos/4506219/pexels-photo-4506219.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
        title: 'Joint Mobilization',
        description: 'Restoring mobility and flexibility'
      },
      {
        url: 'https://images.pexels.com/photos/4506217/pexels-photo-4506217.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
        title: 'Therapeutic Massage',
        description: 'Reducing tension and promoting healing'
      },
      {
        url: 'https://images.pexels.com/photos/5473223/pexels-photo-5473223.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
        title: 'Stretching Therapy',
        description: 'Improving range of motion'
      },
      {
        url: 'https://images.pexels.com/photos/4506214/pexels-photo-4506214.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
        title: 'Recovery Support',
        description: 'Professional guidance throughout your journey'
      }
    ]
  };

  return (
    <div className="HomePage">
      <Hero />

      {/* Services Overview */}
      <section className="HomePage__services">
        <div className="HomePage__container">
          <div className="HomePage__section-header">
            <span className="HomePage__tagline">Our Services</span>
            <h2 className="HomePage__title">Expert Physical Therapy Services</h2>
            <p className="HomePage__subtitle">
              Specialized rehabilitation programs tailored to your unique needs
            </p>
          </div>

          <div className="HomePage__services-grid">
            {servicesOverview.map((service, index) => (
              <div key={index} className="HomePage__service-card" data-index={index}>
                <div className="HomePage__service-image">
                  <img src={service.image} alt={service.title} />
                  <span className="HomePage__service-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="HomePage__service-icon-overlay">
                    {service.icon}
                  </div>
                </div>
                <div className="HomePage__service-content">
                  <h3 className="HomePage__service-title">{service.title}</h3>
                  <p className="HomePage__service-description">{service.description}</p>
                  <Link to="/services" className="HomePage__service-learn-more">
                    Learn More <LuArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="HomePage__services-cta">
            <Link to="/services" className="HomePage__button HomePage__button--primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="HomePage__quick-actions">
        <div className="HomePage__container">
          <div className="HomePage__quick-actions-grid">
            <a href="tel:+1234567890" className="HomePage__quick-action-card HomePage__quick-action-card--primary">
              <div className="HomePage__quick-action-icon">
                <LuPhone />
              </div>
              <div className="HomePage__quick-action-content">
                <h3 className="HomePage__quick-action-title">Schedule ASAP</h3>
                <p className="HomePage__quick-action-description">Book your appointment today</p>
              </div>
              <div className="HomePage__quick-action-arrow">
                <LuArrowRight />
              </div>
            </a>

            <a href="tel:+1234567890" className="HomePage__quick-action-card HomePage__quick-action-card--secondary">
              <div className="HomePage__quick-action-icon">
                <LuClipboardList />
              </div>
              <div className="HomePage__quick-action-content">
                <h3 className="HomePage__quick-action-title">Patient Results</h3>
                <p className="HomePage__quick-action-description">Access your medical records</p>
              </div>
              <div className="HomePage__quick-action-arrow">
                <LuArrowRight />
              </div>
            </a>

            <a href="tel:+1234567890" className="HomePage__quick-action-card HomePage__quick-action-card--tertiary">
              <div className="HomePage__quick-action-icon">
                <LuBriefcase />
              </div>
              <div className="HomePage__quick-action-content">
                <h3 className="HomePage__quick-action-title">Join Our Team</h3>
                <p className="HomePage__quick-action-description">Explore career opportunities</p>
              </div>
              <div className="HomePage__quick-action-arrow">
                <LuArrowRight />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={whyChooseRef} className="HomePage__why-choose">
        <div className="HomePage__container">
          <div className="HomePage__why-choose-header">
            <span className="HomePage__tagline">Why Choose Us</span>
          </div>

          <div className="HomePage__why-choose-content">
            <div className="HomePage__why-choose-text">
              <h2 className="HomePage__why-choose-title">{whyChooseUs.title}</h2>
              <p className="HomePage__why-choose-paragraph HomePage__why-choose-paragraph--typed">
                {typedText1}
                {typedText1.length < fullText1.length && <span className="HomePage__cursor">|</span>}
              </p>
              <p className="HomePage__why-choose-paragraph HomePage__why-choose-paragraph--typed">
                {typedText2}
                {typedText1.length === fullText1.length && typedText2.length < fullText2.length && <span className="HomePage__cursor">|</span>}
              </p>
              <Link to="/about" className="HomePage__button HomePage__button--primary">
                Learn More
              </Link>
            </div>

            <div className="HomePage__why-choose-images">
              <div className="HomePage__why-choose-grid">
                {whyChooseUs.images.map((image, index) => (
                  <div key={index} className="HomePage__why-choose-image">
                    <img src={image.url} alt={image.title} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Testimonials Section */}
      <section className="HomePage__testimonials">
        <div className="HomePage__container">
          <div className="HomePage__section-header">
            <span className="HomePage__tagline">Our Community</span>
            <h2 className="HomePage__title">Trusted by Thousands of Patients</h2>
            <p className="HomePage__subtitle">
              Real stories from real people who have transformed their lives through our care
            </p>
          </div>

          {(() => {
            const testimonials = [
              {
                name: "Michael R.",
                rating: 5,
                comment: "After my knee surgery, I thought I'd never run again. The team here made the impossible possible. Now I'm back to marathon training!",
                initials: "MR",
                color: "#4A7C59",
                highlight: true
              },
              {
                name: "Jennifer T.",
                rating: 5,
                comment: "The personalized attention was incredible. They created a perfect recovery plan tailored just for me.",
                initials: "JT",
                color: "#5B8A72",
                highlight: false
              },
              {
                name: "David C.",
                rating: 5,
                comment: "Professional and highly skilled therapists. Recovered from my sports injury faster than expected!",
                initials: "DC",
                color: "#6B9B7A",
                highlight: false
              },
              {
                name: "Sarah W.",
                rating: 5,
                comment: "My chronic back pain is finally manageable after years of suffering. Can't thank the team enough!",
                initials: "SW",
                color: "#7DAF8A",
                highlight: true
              },
              {
                name: "Robert J.",
                rating: 5,
                comment: "Best PT clinic I've ever been to. The results truly speak for themselves.",
                initials: "RJ",
                color: "#4A7C59",
                highlight: false
              },
              {
                name: "Amanda M.",
                rating: 5,
                comment: "Outstanding facility with therapists who genuinely care about your progress and well-being.",
                initials: "AM",
                color: "#5B8A72",
                highlight: false
              },
              {
                name: "Thomas H.",
                rating: 5,
                comment: "From shoulder surgery to full mobility in record time. Their expertise is unmatched!",
                initials: "TH",
                color: "#6B9B7A",
                highlight: true
              },
              {
                name: "Linda K.",
                rating: 5,
                comment: "The balance therapy program changed my life. I feel confident and steady again!",
                initials: "LK",
                color: "#7DAF8A",
                highlight: false
              }
            ];

            const itemsPerPage = 4;
            const maxIndex = Math.ceil(testimonials.length / itemsPerPage) - 1;
            const currentTestimonials = testimonials.slice(
              currentTestimonialIndex * itemsPerPage,
              (currentTestimonialIndex * itemsPerPage) + itemsPerPage
            );

            const handlePrevious = () => {
              setCurrentTestimonialIndex(prev => Math.max(0, prev - 1));
            };

            const handleNext = () => {
              setCurrentTestimonialIndex(prev => Math.min(maxIndex, prev + 1));
            };

            return (
              <>
                <div className="HomePage__testimonials-showcase">
                  <div className="HomePage__testimonials-main">
                    {currentTestimonials.map((testimonial, index) => (
                      <div
                        key={currentTestimonialIndex * itemsPerPage + index}
                        className={`HomePage__testimonial-card ${testimonial.highlight ? 'HomePage__testimonial-card--featured' : ''}`}
                      >
                        <div className="HomePage__testimonial-quote-icon">"</div>
                        <p className="HomePage__testimonial-comment">{testimonial.comment}</p>
                        <div className="HomePage__testimonial-footer">
                          <div
                            className="HomePage__testimonial-avatar"
                            style={{ backgroundColor: testimonial.color }}
                          >
                            {testimonial.initials}
                          </div>
                          <div className="HomePage__testimonial-info">
                            <h4 className="HomePage__testimonial-name">{testimonial.name}</h4>
                            <div className="HomePage__testimonial-rating">
                              {[...Array(5)].map((_, i) => (
                                <span
                                  key={i}
                                  className={`HomePage__testimonial-star ${
                                    i < testimonial.rating ? 'HomePage__testimonial-star--filled' : ''
                                  }`}
                                >
                                  ★
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="HomePage__testimonials-controls">
                    <button
                      className="HomePage__testimonials-nav HomePage__testimonials-nav--prev"
                      onClick={handlePrevious}
                      disabled={currentTestimonialIndex === 0}
                      aria-label="Previous testimonials"
                    >
                      <LuChevronLeft />
                    </button>

                    <div className="HomePage__testimonials-indicators">
                      {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                        <button
                          key={index}
                          className={`HomePage__testimonials-indicator ${
                            index === currentTestimonialIndex ? 'HomePage__testimonials-indicator--active' : ''
                          }`}
                          onClick={() => setCurrentTestimonialIndex(index)}
                          aria-label={`Go to testimonials page ${index + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      className="HomePage__testimonials-nav HomePage__testimonials-nav--next"
                      onClick={handleNext}
                      disabled={currentTestimonialIndex === maxIndex}
                      aria-label="Next testimonials"
                    >
                      <LuChevronRight />
                    </button>
                  </div>
                </div>
              </>
            );
          })()}
        </div>
      </section>

      {/* CTA Section - Unique Design */}
      <section className="HomePage__cta">
        <div className="HomePage__cta-background"></div>
        <div className="HomePage__container">
          <div className="HomePage__cta-grid">
            {/* Left Side - Impact Stats */}
            <div className="HomePage__cta-stats">
              <div className="HomePage__cta-stat-card HomePage__cta-stat-card--primary">
                <span className="HomePage__cta-stat-number">96%</span>
                <span className="HomePage__cta-stat-label">Patient Satisfaction</span>
              </div>
              <div className="HomePage__cta-stat-card HomePage__cta-stat-card--secondary">
                <span className="HomePage__cta-stat-number">23K+</span>
                <span className="HomePage__cta-stat-label">Lives Transformed</span>
              </div>
              <div className="HomePage__cta-testimonial">
                <div className="HomePage__cta-quote-mark">"</div>
                <p className="HomePage__cta-quote-text">
                  The team helped me return to my active lifestyle. Professional, caring, and effective.
                </p>
                <p className="HomePage__cta-quote-author">— Sarah M., Marathon Runner</p>
              </div>
            </div>

            {/* Right Side - CTA Content */}
            <div className="HomePage__cta-content">
              <span className="HomePage__cta-badge">Your Journey Starts Here</span>
              <h2 className="HomePage__cta-title">
                Let's Create Your<br />
                <span className="HomePage__cta-title-highlight">Recovery Plan</span>
              </h2>
              <p className="HomePage__cta-description">
                Every recovery journey is unique. Our expert therapists develop personalized treatment plans designed specifically for your goals and lifestyle.
              </p>

              <div className="HomePage__cta-actions">
                <a href="tel:+1234567890" className="HomePage__cta-button HomePage__cta-button--primary">
                  <span className="HomePage__cta-button-icon">📞</span>
                  <div className="HomePage__cta-button-content">
                    <span className="HomePage__cta-button-label">Call Now</span>
                    <span className="HomePage__cta-button-sublabel">Free Consultation</span>
                  </div>
                </a>
                <Link to="/team" className="HomePage__cta-button HomePage__cta-button--secondary">
                  <div className="HomePage__cta-button-content">
                    <span className="HomePage__cta-button-label">Meet Our Experts</span>
                    <span className="HomePage__cta-button-sublabel">View Team →</span>
                  </div>
                </Link>
              </div>

              <div className="HomePage__cta-trust">
                <span className="HomePage__cta-trust-badge">✓ Licensed Therapists</span>
                <span className="HomePage__cta-trust-badge">✓ Insurance Accepted</span>
                <span className="HomePage__cta-trust-badge">✓ Same-Day Appointments</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
