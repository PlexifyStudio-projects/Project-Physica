import './PlaceholderImage.scss';

function PlaceholderImage({ aspectRatio = '16/9', icon, label, variant = 'default' }) {
  return (
    <div
      className={`PlaceholderImage PlaceholderImage--${variant}`}
      style={{ aspectRatio }}
    >
      <div className="PlaceholderImage__inner">
        {/* Decorative dot pattern */}
        <div className="PlaceholderImage__dots" aria-hidden="true"></div>

        {/* Decorative border frame */}
        <div className="PlaceholderImage__frame" aria-hidden="true"></div>

        {/* Central content */}
        <div className="PlaceholderImage__content">
          {icon && <span className="PlaceholderImage__icon">{icon}</span>}
          {label && <span className="PlaceholderImage__label">{label}</span>}
        </div>
      </div>
    </div>
  );
}

export default PlaceholderImage;
