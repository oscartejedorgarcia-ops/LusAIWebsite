import { MouseEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';

const sectionIds = ['home', 'use-cases', 'contact'] as const;

type SectionId = (typeof sectionIds)[number];

function Navbar() {
  const location = useLocation();
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
          <img src="/images/lus-icon.png" alt="Lus AI logo" className="logo-icon" />
          <span className="logo-text">
            <span>Lus AI</span>
          </span>
        </Link>
        <nav className="nav-links">
          <a
            href="/#home"
            onClick={(event) => handleSectionClick(event, 'home')}
            className="nav-link"
          >
            Home
          </a>
          <a
            href="/#use-cases"
            onClick={(event) => handleSectionClick(event, 'use-cases')}
            className="nav-link"
          >
            Use Cases
          </a>
          <a
            href="/#contact"
            onClick={(event) => handleSectionClick(event, 'contact')}
            className="nav-link"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
