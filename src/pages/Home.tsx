import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import UseCaseCard from '../components/UseCaseCard';
import { CONTACT } from '../data/useCases';
import { useLanguage } from '../i18n/LanguageContext';

function Home() {
  const location = useLocation();
  const { translation, localizedUseCases } = useLanguage();
  const { landingContent } = translation;
  const { home } = translation.ui;

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const sectionId = location.hash.replace('#', '');
    const section = document.getElementById(sectionId);
    if (!section) {
      return;
    }

    // Wait one frame to ensure the section is mounted before scrolling.
    requestAnimationFrame(() => {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [location.hash]);

  return (
    <div className="container">
      <section id="home" className="section hero-section">
        <p className="eyebrow">{landingContent.hero.eyebrow}</p>
        <h1>{landingContent.hero.title}</h1>
        <p className="section-subtext hero-subtext">{landingContent.hero.subtitle}</p>

        <div className="hero-ctas" aria-label="Landing page actions">
          <a href={landingContent.hero.primaryCta.href} className="button-link">
            {landingContent.hero.primaryCta.label}
          </a>
          <a href={landingContent.hero.secondaryCta.href} className="button-link button-link-secondary">
            {landingContent.hero.secondaryCta.label}
          </a>
        </div>

        <section className="landing-block" aria-labelledby="benefits-title">
          <div className="section-heading">
            <h2 id="benefits-title">{landingContent.benefits.title}</h2>
          </div>
          <div className="landing-grid landing-grid-benefits">
            {landingContent.benefits.items.map((benefit) => (
              <article key={benefit.title} className="landing-card">
                <img
                  src={benefit.imageUrl}
                  alt={benefit.imageAlt}
                  className="benefit-image"
                  loading="lazy"
                />
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="landing-block" aria-labelledby="expertise-title">
          <div className="section-heading">
            <h2 id="expertise-title">{landingContent.expertise.title}</h2>
          </div>
          <div className="landing-grid landing-grid-expertise">
            {landingContent.expertise.items.map((item) => (
              <article key={item.id} className="landing-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <h4 className="card-subtitle">{home.examples}</h4>
                <ul className="expertise-examples">
                  {item.examples.map((example) => (
                    <li key={example}>{example}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="landing-block" aria-labelledby="differentiators-title">
          <div className="section-heading">
            <h2 id="differentiators-title">{landingContent.differentiators.title}</h2>
          </div>
          <ul className="landing-grid landing-grid-differentiators" aria-label={home.keyDifferentiatorsAria}>
            {landingContent.differentiators.items.map((item) => (
              <li key={item} className="landing-card landing-list-card">
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="landing-block" aria-labelledby="how-we-work-title">
          <div className="section-heading">
            <h2 id="how-we-work-title">{landingContent.howWeWork.title}</h2>
          </div>
          <ol className="how-we-work" aria-label={home.lusAIDeliveryAria}>
            {landingContent.howWeWork.steps.map((step, index) => (
              <li key={step} className="how-step">
                <span className="how-step-index">{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>
      </section>

      <section id="use-cases" className="section">
        <div className="section-heading">
          <p className="eyebrow">{home.useCasesEyebrow}</p>
          <h2>{home.exploreSolutions}</h2>
        </div>

        <div className="cards-grid">
          {localizedUseCases.map((useCase) => (
            <UseCaseCard key={useCase.id} useCase={useCase} />
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="section-heading">
          <p className="eyebrow">{home.contactEyebrow}</p>
          <h2>{home.getInTouch}</h2>
        </div>

        <p>
          {home.emailLabel}:{' '}
          <a href={CONTACT.emailHref} className="contact-link">
            {CONTACT.emailDisplay}
          </a>
        </p>
        <p>
          {home.internationalLabel}: {CONTACT.phoneFormatted}
        </p>
      </section>
    </div>
  );
}

export default Home;
