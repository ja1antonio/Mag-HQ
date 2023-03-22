import styled from 'styled-components';

export const StyledMain = styled.section`
  background: ${({ theme }) => theme.COLORS.WHITE};

  .card {
    background: ${({ theme }) => theme.COLORS.BLACK_LIGHT};
    color: ${({ theme }) => theme.COLORS.WHITE_TEXT};
    margin: 4rem;
    width: 376px;
    height: 120px;
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem 1rem;
    border-radius: 8px;
  }

  img {
    position: absolute;
    width: 216px;
    height: 137px;
    left: 213px;
    top: 146px;
  }

  span {
    color: ${({ theme }) => theme.COLORS.GOLD};
  }
`;
