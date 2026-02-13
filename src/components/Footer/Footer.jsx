import { Link } from 'react-router-dom';
import {
  LuMapPin,
  LuPhone,
  LuMail,
  LuPrinter,
  LuInstagram,
  LuArrowUpRight,
  LuHeart
} from 'react-icons/lu';
import './Footer.scss';

function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Programs', to: '/programs' },
    { label: 'Contact', to: '/contact' },
  ];

  const services = [
    'Physical Therapy',
    'Personal Training',
    'Infrared Sauna',
    'Cupping',
    'Massage Therapy',
  ];

  return (
    <footer className="Footer">
      {/* Top accent line */}
      <div className="Footer__accent-line"></div>

      <div className="Footer__main">
        <div className="Footer__container">
          <div className="Footer__grid">
            {/* Brand Column */}
            <div className="Footer__brand">
              <h2 className="Footer__brand-name">Physica<span className="Footer__brand-comma">,</span> Inc</h2>
              <p className="Footer__brand-tagline">Physical Therapy &amp; Fitness</p>
              <p className="Footer__brand-text">
                Personalized care for movement, recovery, and independence.
                Serving the Irvine community with evidence-based rehabilitation
                and compassionate one-on-one treatment.
              </p>
              <a
                href="https://www.instagram.com/physica_inc/"
                target="_blank"
                rel="noopener noreferrer"
                className="Footer__social"
                aria-label="Follow us on Instagram"
              >
                <LuInstagram />
                <span>@PHYSICA_INC</span>
                <LuArrowUpRight className="Footer__social-arrow" />
              </a>
            </div>

            {/* Navigation Column */}
            <div className="Footer__col">
              <h3 className="Footer__col-title">Navigate</h3>
              <nav className="Footer__nav-list">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="Footer__nav-link"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services Column */}
            <div className="Footer__col">
              <h3 className="Footer__col-title">Services</h3>
              <div className="Footer__services-list">
                {services.map((service, i) => (
                  <span key={i} className="Footer__service-tag">{service}</span>
                ))}
              </div>
            </div>

            {/* Contact Column */}
            <div className="Footer__col">
              <h3 className="Footer__col-title">Contact</h3>
              <div className="Footer__contact-list">
                <a href="tel:+19495025520" className="Footer__contact-item">
                  <LuPhone className="Footer__contact-icon" />
                  <span>(949) 502-5520</span>
                </a>
                <div className="Footer__contact-item">
                  <LuPrinter className="Footer__contact-icon" />
                  <span>(949) 502-5593</span>
                </div>
                <a href="mailto:physicatherapy1@gmail.com" className="Footer__contact-item">
                  <LuMail className="Footer__contact-icon" />
                  <span>physicatherapy1@gmail.com</span>
                </a>
                <a
                  href="https://maps.google.com/?q=17911+Sky+Park+Cir+Irvine+CA+92614"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Footer__contact-item"
                >
                  <LuMapPin className="Footer__contact-icon" />
                  <span>17911 Sky Park Cir, Ste L&amp;M<br />Irvine, CA 92614</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="Footer__bottom">
        <div className="Footer__container Footer__bottom-inner">
          <p className="Footer__copyright">
            &copy; {currentYear} Physica, Inc &mdash; Physical Therapy &amp; Fitness. All Rights Reserved.
          </p>
          <p className="Footer__made-with">
            Made with <LuHeart className="Footer__heart" /> in Irvine, CA
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
