import { Link } from 'react-router-dom';
import AutomatedQualityPreview from './AutomatedQualityPreview';
import { UseCase } from '../data/useCases';
import { useLanguage } from '../i18n/LanguageContext';

interface UseCaseCardProps {
  useCase: UseCase;
}

function UseCaseCard({ useCase }: UseCaseCardProps) {
  const isAutomatedQualityControl = useCase.id === 'knowledge-search';
  const { translation } = useLanguage();
  const { useCase: useCaseUi } = translation.ui;

  return (
    <article className="card">
      {isAutomatedQualityControl ? (
        <AutomatedQualityPreview />
      ) : (
        <img src={useCase.imageUrl} alt={useCase.title} className="card-image" loading="lazy" />
      )}
      <div className="card-content">
        <h3>{useCase.title}</h3>
        <p>{useCase.shortDescription}</p>

        <Link to={`/use-cases/${useCase.id}`} className="card-link">
          {useCaseUi.viewDetails}
        </Link>
      </div>
    </article>
  );
}

export default UseCaseCard;
