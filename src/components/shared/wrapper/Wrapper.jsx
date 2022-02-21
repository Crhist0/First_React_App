import React from 'react';
import { StyledSection } from './styled';

export const Wrapper = (props) => {
  return (
    <StyledSection
      bgColor={props.bgColor ? props.bgColor : false}
      bg={props.bg ? props.bg : false}
      height={props.size === 'big' ? '40rem' : '15rem'}
    >
      {props.children}
    </StyledSection>
  );
};
