import { Link, useParams } from 'react-router-dom';
import { useCases } from '../data/useCases';

function UseCaseDetail() {
  const { id } = useParams<{ id: string }>();
  const useCase = useCases.find((item) => item.id === id);

  if (!useCase) {
    return (
      <div className="container section">
        <h1>Use case not found</h1>
        <p>Please return to the home page and select a valid card.</p>
        <Link to="/" className="button-link">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container section detail-page">
      <Link to="/" className="button-link">
        Back to Home
      </Link>

      <article className="detail-card">
        <img src={useCase.imageUrl} alt={useCase.title} className="detail-image" />
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
