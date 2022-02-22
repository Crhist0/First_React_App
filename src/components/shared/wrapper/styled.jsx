import styled, { css } from 'styled-components';

export const StyledSection = styled.section`
  background-color: ${(props) => props.theme.bgColor};
  /* padding: 1rem; */
  height: ${(props) => props.height};
  display: flex;
  justify-content: center;
  ${(props) => {    
    if (props.bg) {
      return css`
        opacity: 0.9;
        background-image: ${(props) => props.bg};
        background-position: center;
        background-size: cover;
        transition: 0.8s;
        :hover {
          opacity: 1;
        }
      `;
    }
    if (props.bgColor) {
      return css`
        background-color: ${(props) => props.theme.bgColorSecondary};
      `;
    }
  }}
`;
