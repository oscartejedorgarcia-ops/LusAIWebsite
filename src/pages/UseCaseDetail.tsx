import { Link, useParams } from 'react-router-dom';
import AutomatedQualityPreview from '../components/AutomatedQualityPreview';
import { useCases } from '../data/useCases';

function UseCaseDetail() {
  const { id } = useParams<{ id: string }>();
  const useCase = useCases.find((item) => item.id === id);
  const isAutomatedQualityControl = useCase?.id === 'knowledge-search';

  if (!useCase) {
    return (
      <div className="container section">
        <h1>Use case not found</h1>
        <p>Please return to the use cases section and select a valid card.</p>
        <Link to="/#use-cases" className="button-link">
          Back to Use Cases
        </Link>
      </div>
    );
  }

  return (
    <div className="container section detail-page">
      <Link to="/#use-cases" className="button-link">
        Back to Use Cases
      </Link>

      <article className="detail-card">
        {isAutomatedQualityControl ? (
          <AutomatedQualityPreview />
        ) : (
          <img src={useCase.imageUrl} alt={useCase.title} className="card-image detail-image" />
        )}
        <div className="detail-content">
          <p className="eyebrow">Use Case Detail</p>
          <h1>{useCase.title}</h1>
          <p>{useCase.longDescription}</p>
        </div>
      </article>
    </div>
  );
}

export default UseCaseDetail;
