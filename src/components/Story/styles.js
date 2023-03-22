import styled from 'styled-components';
import hq1 from '../../assets/hq1.jpg';

export const StyledStory = styled.section`
  .section-main {
    width: 100vh;
    right: 100vh;
    margin: 1rem;
  }

  .section-full-cards {
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .section-cards {
    background: white;
    border: 1px solid ${({ theme }) => theme.COLORS.GOLD};

    width: 210px;
    height: 292px;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    gap: 12px;
    isolation: isolate;
    border-radius: 8px;
  }

  .card-visual {
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card-visual img {
    width: 88px;
    height: 120px;
  }

  .card-value {
    display: flex;

    align-items: center;
    gap: 14px;
  }
`;
