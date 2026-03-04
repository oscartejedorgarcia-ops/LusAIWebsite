import { Link } from 'react-router-dom';
import { UseCase } from '../data/useCases';

interface UseCaseCardProps {
  useCase: UseCase;
}

function UseCaseCard({ useCase }: UseCaseCardProps) {
  return (
    <article className="card">
      <img src={useCase.imageUrl} alt={useCase.title} className="card-image" loading="lazy" />
      <div className="card-content">
        <h3>{useCase.title}</h3>
        <p>{useCase.shortDescription}</p>

        <Link to={`/use-cases/${useCase.id}`} className="card-link">
          View details
        </Link>
      </div>
    </article>
  );
}

export default UseCaseCard;
