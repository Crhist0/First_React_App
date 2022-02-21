import React from 'react';
import { StyledSpan, StyledTitle } from './styled';

export const Title = (props) => {
  return (
    <StyledSpan>
      <StyledTitle>{props.children}</StyledTitle>
    </StyledSpan>
  );
};
