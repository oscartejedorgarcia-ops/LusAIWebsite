import { useLanguage } from '../i18n/LanguageContext';

function AutomatedQualityPreview() {
  const { translation } = useLanguage();
  const { qualityPreview } = translation.ui;

  return (
    <div className="quality-card-image" aria-label={qualityPreview.ariaLabel}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Gas_meter.JPG"
        alt={qualityPreview.imageAlt}
        className="quality-card-photo"
        loading="lazy"
      />
      <div className="quality-card-checks">
        <p className="quality-card-title">{qualityPreview.checksTitle}</p>
        <p className="quality-check quality-check-pass">{qualityPreview.check1}</p>
        <p className="quality-check quality-check-pass">{qualityPreview.check2}</p>
        <p className="quality-check quality-check-fail">{qualityPreview.check3}</p>
      </div>
    </div>
  );
}

export default AutomatedQualityPreview;
