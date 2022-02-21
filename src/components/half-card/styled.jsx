import styled from 'styled-components';

export const StyledDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
`;

export const StyledP = styled.p(({ theme }) => ({
  color: theme.textColor,
}));

export const StyledH1 = styled.h1(({ theme }) => ({
  color: theme.textColor,
  marginBottom: '1rem',
}));
