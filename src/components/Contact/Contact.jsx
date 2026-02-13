import { useEffect, useRef, useState } from 'react';
import {
  LuMapPin,
  LuPhone,
  LuMail,
  LuPrinter,
  LuNavigation,
  LuInstagram
} from 'react-icons/lu';
import './Contact.scss';

function Contact({ hideHeader = false }) {
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

  const contactCards = [
    {
      icon: LuPhone,
      title: 'Phone',
      value: '(949) 502-5520',
      href: 'tel:+19495025520',
      isLink: true,
    },
    {
      icon: LuPrinter,
      title: 'Fax',
      value: '(949) 502-5593',
      href: null,
      isLink: false,
    },
    {
      icon: LuMail,
      title: 'Email',
      value: 'physicatherapy1@gmail.com',
      href: 'mailto:physicatherapy1@gmail.com',
      isLink: true,
    },
    {
      icon: LuMapPin,
      title: 'Address',
      value: '17911 Sky Park Cir, Suites L&M, Irvine, CA 92614',
      displayValue: (
        <>
          17911 Sky Park Cir, Suites L&amp;M
          <br />
          Irvine, CA 92614
        </>
      ),
      href: 'https://maps.google.com/?q=17911+Sky+Park+Cir+Irvine+CA+92614',
      isLink: true,
      isExternal: true,
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`Contact ${isVisible ? 'Contact--visible' : ''}`}
    >
      <div className="Contact__container">
        {!hideHeader && (
          <header className="Contact__header">
            <div className="Contact__indicator">
              <span className="Contact__indicator-line"></span>
              <span className="Contact__indicator-label">Get In Touch</span>
            </div>

            <h2 className="Contact__title">
              Contact <em className="Contact__title-accent">Us</em>
            </h2>

            <p className="Contact__subtitle">
              Ready to start your recovery? Reach out to us directly
              by phone, email, or visit our Irvine clinic.
            </p>
          </header>
        )}

        {/* Two-column layout */}
        <div className="Contact__grid">
          {/* Left: Contact cards */}
          <div className="Contact__info">
            <div className="Contact__cards">
              {contactCards.map((card, index) => {
                const Icon = card.icon;
                const CardTag = card.isLink ? 'a' : 'div';
                const linkProps = card.isLink
                  ? {
                      href: card.href,
                      ...(card.isExternal
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {}),
                    }
                  : {};

                return (
                  <CardTag
                    key={index}
                    className={`Contact__card ${
                      card.isLink ? 'Contact__card--interactive' : ''
                    }`}
                    style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                    {...linkProps}
                  >
                    <div className="Contact__card-icon">
                      <Icon />
                    </div>
                    <div className="Contact__card-content">
                      <h3 className="Contact__card-title">{card.title}</h3>
                      <span className="Contact__card-value">
                        {card.displayValue || card.value}
                      </span>
                    </div>
                  </CardTag>
                );
              })}
            </div>

            {/* Social & action buttons */}
            <div className="Contact__actions">
              <a
                href="https://maps.google.com/?q=17911+Sky+Park+Cir+Irvine+CA+92614"
                target="_blank"
                rel="noopener noreferrer"
                className="Contact__directions"
              >
                <LuNavigation />
                <span>Get Directions</span>
              </a>

              <a
                href="https://www.instagram.com/PHYSICA_INC"
                target="_blank"
                rel="noopener noreferrer"
                className="Contact__social"
              >
                <LuInstagram />
                <span>@PHYSICA_INC</span>
              </a>
            </div>
          </div>

          {/* Right: Google Maps embed */}
          <div className="Contact__map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.1!2d-117.8516!3d33.6846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcde9f3f96f2d7%3A0x9db0e7de21f6e610!2s17911%20Sky%20Park%20Cir%2C%20Irvine%2C%20CA%2092614!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Physica Inc - 17911 Sky Park Cir, Irvine, CA 92614"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
