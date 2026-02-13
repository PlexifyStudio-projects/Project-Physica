import { LuPhone, LuArrowRight } from 'react-icons/lu';
import './CTABanner.scss';

function CTABanner() {
  return (
    <div className="CTABanner">
      {/* Subtle pattern overlay */}
      <div className="CTABanner__pattern" aria-hidden="true"></div>

      {/* Decorative accents */}
      <div className="CTABanner__accent CTABanner__accent--left" aria-hidden="true"></div>
      <div className="CTABanner__accent CTABanner__accent--right" aria-hidden="true"></div>

      <div className="CTABanner__container">
        <div className="CTABanner__content">
          <h3 className="CTABanner__heading">
            Ready to Start Your <em className="CTABanner__heading-accent">Recovery</em>?
          </h3>

          <p className="CTABanner__subtext">
            Schedule your evaluation today and take the first step toward a pain-free life.
          </p>
        </div>

        <a
          href="tel:+19495025520"
          className="CTABanner__button"
          aria-label="Call Physica Inc at (949) 502-5520"
        >
          <LuPhone className="CTABanner__button-icon" />
          <span className="CTABanner__button-text">(949) 502-5520</span>
          <LuArrowRight className="CTABanner__button-arrow" />
        </a>
      </div>
    </div>
  );
}

export default CTABanner;
