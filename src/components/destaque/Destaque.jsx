import React from 'react';
import { StyledI } from './styled';

export const Destaque = (props) => {
  return (
    <>
      <StyledI>{props.children}</StyledI>
    </>
  );
};
