import styled, { css } from 'styled-components';

export const StyledSection = styled.section`
  background-color: ${(props) => props.theme.bgColor};
  /* padding: 1rem; */
  height: ${(props) => props.height};
  display: flex;
  justify-content: center;
  ${(props) => {
    if (props.bg === true) {
      return css`
        opacity: 0.9;
        background-image: url(https://images.unsplash.com/photo-1439405326854-014607f694d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=10.jpeg);
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
