import { StyledMain } from './styles';
import Iron from '../../assets/Iron-Man.png';

export default function Main() {
  return (
    <StyledMain>
      <div className="card">
        <div className="flex">
          <div className="info">
            <h1>Melhores HQs da Marvel</h1>
            <p>
              Aprovei nossas promoção em HQs <span>Raras</span> e Comuns
            </p>
          </div>
        </div>
      </div>
    </StyledMain>
  );
}
