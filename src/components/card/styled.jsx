import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 23vw;
  margin: 5rem;
  padding: 0.5rem;
`;
export const StyledH3 = styled.h3`
  text-align: center;
  font-size: 1.8rem;
  margin: 0.8rem 0rem 0.5rem;
  color: ${(props) => props.theme.textColor};
`;
export const StyledP = styled.p`
  max-width: fit-content;
  text-align: center;
  color: ${(props) => props.theme.textColor};
`;
