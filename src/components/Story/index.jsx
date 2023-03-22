import { StyledStory } from './styles';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import hq1 from '../../assets/hq1.jpg';
import hq2 from '../../assets/hq2.jpg';
import hq3 from '../../assets/hq3.jpg';

export default function Story() {
  return (
    <StyledStory>
      <div className="section-main">
        <h1>Hqs em Destaque</h1>
        <div className="section-full-cards">
          <div className="section-cards">
            <div className="card">
              <div className="card-visual">
                <img src={hq1} alt="" />
                <h3>Hq DeadPool</h3>
                <p>Dead pool matador</p>
                <h4>R$49,97</h4>
              </div>
              <div className="card-value">
                <AiOutlineMinus />
                <h4>01</h4>
                <AiOutlinePlus />
              </div>
            </div>
          </div>

          <div className="section-cards">
            <div className="card">
              <div className="card-visual">
                <img src={hq2} alt="" />
                <h3>Hq DeadPool</h3>
                <p>Dead pool matador</p>
                <h4>R$49,97</h4>
              </div>
              <div className="card-value">
                <AiOutlineMinus />
                <h4>01</h4>
                <AiOutlinePlus />
              </div>
            </div>
          </div>

          <div className="section-cards">
            <div className="card">
              <div className="card-visual">
                <img src={hq3} alt="" />
                <h3>Hq DeadPool</h3>
                <p>Dead pool matador</p>
                <h4>R$49,97</h4>
              </div>
              <div className="card-value">
                <AiOutlineMinus />
                <h4>01</h4>
                <AiOutlinePlus />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledStory>
  );
}
