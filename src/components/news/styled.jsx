import styled, { css } from 'styled-components';

export const StyledNews = styled.div`
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 5px;
  padding: 20px;
  color: ${(props) => props.theme.color};
  font-weight: bolder;
  background-image: url(https://d281e75zdqqlon.cloudfront.net/wp-content/uploads/2022/02/corbie-696x487.jpg);
  background-size: cover;
  background-position: center;
  opacity: 0.7;
  transform: translateY(20px);
  transition: 0.2s;
  :hover {
    opacity: 1;
    transform: translateY(0px);
  }
  ${(props) => {
    if (props.big) {
      return css`
        height: 200px;
        width: 400px;
      `;
    }
    if (props.normal) {
      return css`
        height: 150px;
        width: 300px;
      `;
    }
    if (props.small) {
      return css`
        height: 100px;
        width: 200px;
      `;
    }
  }}
`;
export const StyledButton = styled.button`
  margin: 10px;
  background-color: ${(props) =>
    props.link ? props.theme.linkButtonColor : props.theme.buttonColor};
`;
export const StyledShadow = styled.div`
  box-shadow: ${(props) => props.theme.shadowColor};
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
`;
