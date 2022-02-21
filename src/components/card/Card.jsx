import React from 'react';
import { StyledDiv } from './styled';

export const Card = (props) => {
  return (
    <>
      <StyledDiv>{props.children}</StyledDiv>
    </>
  );
};
