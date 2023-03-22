import styled from 'styled-components';

export const StyledHeader = styled.div`
  background: ${({ theme }) => theme.COLORS.BLACK_DARK};
  color: ${({ theme }) => theme.COLORS.WHITE};

  width: 100vw;
  height: 114px;

  font-size: 50px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    width: 146px;
  }
`;
