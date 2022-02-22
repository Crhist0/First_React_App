import React from 'react';
import { Title } from '../shared/title/Title';
import { Wrapper } from '../shared/wrapper/Wrapper';

export const Section = (props) => {
  
  return (
    <Wrapper bgColor={props.bgColor} bg={props.bg} size={props.size}>
      {props.title ? <Title>{props.title}</Title> : null}
      {props.children}
    </Wrapper>
  );
};
