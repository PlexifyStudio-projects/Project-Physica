import { Link } from 'react-router-dom';
import { LuChevronRight } from 'react-icons/lu';
import './PageHero.scss';

function PageHero({ title, titleAccent, subtitle, breadcrumb, image }) {
  return (
    <section className={`PageHero ${image ? 'PageHero--with-image' : ''}`}>
      {/* Background decorations */}
      <div className="PageHero__bg" aria-hidden="true">
        <div className="PageHero__bg-orb PageHero__bg-orb--1"></div>
        <div className="PageHero__bg-orb PageHero__bg-orb--2"></div>
        {image && (
          <div className="PageHero__bg-image">
            <img src={image} alt="" aria-hidden="true" loading="eager" />
          </div>
        )}
      </div>

      <div className="PageHero__container">
        {/* Breadcrumb */}
        {breadcrumb && (
          <nav className="PageHero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="PageHero__breadcrumb-link">Home</Link>
            <LuChevronRight className="PageHero__breadcrumb-sep" />
            <span className="PageHero__breadcrumb-current">{breadcrumb}</span>
          </nav>
        )}

        {/* Title */}
        <h1 className="PageHero__title">
          {title}{' '}
          {titleAccent && <em className="PageHero__title-accent">{titleAccent}</em>}
        </h1>

        {/* Subtitle */}
        {subtitle && <p className="PageHero__subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}

export default PageHero;
