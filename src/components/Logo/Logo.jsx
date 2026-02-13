import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

function Logo() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`Logo ${isScrolled ? 'Logo--scrolled' : ''}`}>
      <div className="Logo__inner">
        <Link to="/" className="Logo__brand">
          <span className="Logo__name">Physica<span className="Logo__name-accent">,</span> Inc</span>
          <span className="Logo__divider"></span>
          <span className="Logo__tagline">Physical Therapy &amp; Fitness</span>
        </Link>
      </div>
    </div>
  );
}

export default Logo;
