import styled from 'styled-components';

export const StyledTitle = styled.h1`
  color: ${(props) => props.theme.bgColor};
  text-align: center;
  font-size: 3.8rem;
  transition: 0.8s;
  margin-bottom: 30px;
  :hover {
    font-size: 4rem;
  }
`;
export const StyledSpan = styled.span`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
