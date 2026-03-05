import { Link, useParams } from 'react-router-dom';
import AutomatedQualityPreview from '../components/AutomatedQualityPreview';
import { useLanguage } from '../i18n/LanguageContext';

function UseCaseDetail() {
  const { id } = useParams<{ id: string }>();
  const { translation, localizedUseCases } = useLanguage();
  const { useCase: useCaseUi } = translation.ui;
  const useCase = localizedUseCases.find((item) => item.id === id);
  const isAutomatedQualityControl = useCase?.id === 'knowledge-search';

  if (!useCase) {
    return (
      <div className="container section">
        <h1>{useCaseUi.notFoundTitle}</h1>
        <p>{useCaseUi.notFoundMessage}</p>
        <Link to="/#use-cases" className="button-link">
          {useCaseUi.backToUseCases}
        </Link>
      </div>
    );
  }

  return (
    <div className="container section detail-page">
      <Link to="/#use-cases" className="button-link">
        {useCaseUi.backToUseCases}
      </Link>

      <article className="detail-card">
        {isAutomatedQualityControl ? (
          <AutomatedQualityPreview />
        ) : (
          <img src={useCase.imageUrl} alt={useCase.title} className="card-image detail-image" />
        )}
        <div className="detail-content">
          <p className="eyebrow">{useCaseUi.detailEyebrow}</p>
          <h1>{useCase.title}</h1>
          <p>{useCase.longDescription}</p>
        </div>
      </article>
    </div>
  );
}

export default UseCaseDetail;
