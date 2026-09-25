import { useState } from 'react';
import { navLinks } from '../../data/assets';
import { useHeaderScroll } from '../../hooks/useAnimations';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useHeaderScroll(60);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        <a href="/" className="header__logo" aria-label="Rugged Monitoring Home">
          <span className="header__logo-accent">RUGGED</span>
          <span className="header__logo-text">MONITORING</span>
        </a>

        <nav className="header__nav-desktop" aria-label="Main Navigation">
          <ul className="header__nav-list">
            {navLinks?.map((link, index) => (
              <li key={index} className="header__nav-item">
                <a href={link.href} className="header__nav-link">{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <a href="/contact" className="btn btn--primary header__cta">
            Talk to an Expert &rarr;
          </a>
          <button 
            className={`header__hamburger ${isMobileMenuOpen ? 'header__hamburger--active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className={`header__mobile-overlay ${isMobileMenuOpen ? 'header__mobile-overlay--active' : ''}`}>
        <nav className="header__mobile-nav" aria-label="Mobile Navigation">
          <ul className="header__mobile-list">
            {navLinks?.map((link, index) => (
              <li key={index} className="header__mobile-item">
                <a href={link.href} className="header__mobile-link" onClick={toggleMobileMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="header__mobile-footer">
            <a href="/contact" className="btn btn--primary" onClick={toggleMobileMenu}>
              Talk to an Expert &rarr;
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
