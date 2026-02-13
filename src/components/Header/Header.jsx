import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LuHouse,
  LuUser,
  LuBriefcaseMedical,
  LuClipboardList,
  LuPhone,
  LuMenu,
  LuX
} from 'react-icons/lu';
import './Header.scss';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: '/', label: 'Home', icon: LuHouse },
    { to: '/about', label: 'About', icon: LuUser },
    { to: '/services', label: 'Services', icon: LuBriefcaseMedical },
    { to: '/programs', label: 'Programs', icon: LuClipboardList },
    { to: '/contact', label: 'Contact', icon: LuPhone },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Desktop Right Sidebar */}
      <nav className="Header" aria-label="Main navigation">
        <div className="Header__sidebar">
          <div className="Header__nav-list">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `Header__nav-item ${isActive ? 'Header__nav-item--active' : ''}`
                  }
                >
                  <span className="Header__nav-icon"><Icon /></span>
                  <span className="Header__nav-label">{item.label}</span>
                </NavLink>
              );
            })}
          </div>

          <a href="tel:+19495025520" className="Header__cta">
            <LuPhone />
            <span>Call Now</span>
          </a>
        </div>
      </nav>

      {/* Mobile Toggle */}
      <button
        className={`Header__mobile-toggle ${isMobileMenuOpen ? 'Header__mobile-toggle--active' : ''}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? <LuX size={22} /> : <LuMenu size={22} />}
      </button>

      {/* Mobile Slide-up Menu */}
      <div className={`Header__mobile-menu ${isMobileMenuOpen ? 'Header__mobile-menu--open' : ''}`}>
        <div className="Header__mobile-inner">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `Header__mobile-item ${isActive ? 'Header__mobile-item--active' : ''}`
                }
              >
                <Icon className="Header__mobile-icon" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
          <a href="tel:+19495025520" className="Header__mobile-cta">
            <LuPhone />
            <span>Call (949) 502-5520</span>
          </a>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div className="Header__overlay" onClick={() => setIsMobileMenuOpen(false)} aria-hidden="true" />
      )}
    </>
  );
}

export default Header;
