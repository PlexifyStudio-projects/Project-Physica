import { useEffect, useRef, useState } from 'react';
import { LuChevronDown } from 'react-icons/lu';
import './FAQSection.scss';

function FAQSection({ hideHeader = false }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
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

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const faqs = [
    {
      question: 'Do I need a referral to start physical therapy?',
      answer:
        'In California, you can see a physical therapist without a physician\u2019s referral for up to 45 days or 12 visits (whichever comes first). However, many insurance plans may require a referral for coverage. We recommend contacting your insurance provider or calling our office to verify.'
    },
    {
      question: 'What should I bring to my first appointment?',
      answer:
        'Please bring your photo ID, insurance card, referral (if applicable), and any relevant medical records or imaging results. Wear comfortable clothing that allows easy movement. Arrive 15 minutes early to complete intake paperwork.'
    },
    {
      question: 'How long is a typical session?',
      answer:
        'Initial evaluations typically last 45\u201360 minutes. Follow-up treatment sessions are usually 30\u201345 minutes, depending on your treatment plan and needs.'
    },
    {
      question: 'Do you accept my insurance?',
      answer:
        'We accept most major insurance plans, including Medicare. Please call our office at (949) 502-5520 to verify your specific coverage before your first visit.'
    },
    {
      question: 'What conditions do you treat?',
      answer:
        'We treat a wide range of conditions including post-surgical rehabilitation, sports injuries, back and neck pain, joint replacements, balance disorders, chronic pain, and general mobility limitations.'
    },
    {
      question: 'How many sessions will I need?',
      answer:
        'The number of sessions varies based on your condition, goals, and progress. During your initial evaluation, your therapist will discuss a personalized treatment plan and expected timeline with you.'
    }
  ];

  return (
    <section
      id="faq"
      ref={sectionRef}
      className={`FAQSection ${isVisible ? 'FAQSection--visible' : ''}`}
    >
      <div className="FAQSection__container">
        {!hideHeader && (
          <header className="FAQSection__header">
            <div className="FAQSection__indicator">
              <span className="FAQSection__indicator-line"></span>
              <span className="FAQSection__indicator-label">FAQ</span>
            </div>

            <h2 className="FAQSection__title">
              Frequently Asked <em className="FAQSection__title-accent">Questions</em>
            </h2>

            <p className="FAQSection__subtitle">
              Find answers to common questions about our services,
              insurance, and what to expect during your visit.
            </p>
          </header>
        )}

        {/* Accordion */}
        <div className="FAQSection__accordion">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`FAQSection__item ${isOpen ? 'FAQSection__item--open' : ''}`}
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <button
                  className="FAQSection__item-header"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="FAQSection__item-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="FAQSection__item-question">{faq.question}</span>
                  <span className="FAQSection__item-icon">
                    <LuChevronDown />
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className="FAQSection__item-body"
                  role="region"
                  aria-hidden={!isOpen}
                >
                  <div className="FAQSection__item-answer">
                    <p className="FAQSection__item-text">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
