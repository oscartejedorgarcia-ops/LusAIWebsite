import { MouseEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { Locale } from '../i18n/types';

const sectionIds = ['home', 'use-cases', 'contact'] as const;

type SectionId = (typeof sectionIds)[number];

function Navbar() {
  const location = useLocation();
  const { locale, setLocale, translation } = useLanguage();
  const { nav } = translation.ui;
  const isHome = location.pathname === '/';

  const handleSectionClick = (event: MouseEvent<HTMLAnchorElement>, sectionId: SectionId) => {
    if (!isHome) {
      return;
    }

    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `/#${sectionId}`);
    }
  };

  return (
    <header className="top-nav">
      <div className="container nav-inner">
        <Link to="/" className="logo-link">
          <img src="/images/lus-icon.png" alt="Lus-AI logo" className="logo-icon" />
          <span className="logo-text">
            <span>Lus-AI</span>
          </span>
        </Link>
        <nav className="nav-links">
          <a
            href="/#home"
            onClick={(event) => handleSectionClick(event, 'home')}
            className="nav-link"
          >
            {nav.home}
          </a>
          <a
            href="/#use-cases"
            onClick={(event) => handleSectionClick(event, 'use-cases')}
            className="nav-link"
          >
            {nav.useCases}
          </a>
          <a
            href="/#contact"
            onClick={(event) => handleSectionClick(event, 'contact')}
            className="nav-link"
          >
            {nav.contact}
          </a>
          <label className="language-switcher">
            <span className="language-label">{nav.language}</span>
            <select
              className="language-select"
              value={locale}
              onChange={(event) => setLocale(event.target.value as Locale)}
              aria-label={nav.language}
            >
              <option value="en">{nav.languageOptions.en}</option>
              <option value="es">{nav.languageOptions.es}</option>
              <option value="pt">{nav.languageOptions.pt}</option>
            </select>
          </label>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
