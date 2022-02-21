import React from 'react';
import { StyledDiv } from './styled';

export const HalfCard = (props) => {
  console.log('img', props.img);
  if (!props.img) {
    return (
      <>
        <StyledDiv>
          <div style={{ padding: '5rem' }}>
            <h1 style={{ marginBottom: '1rem' }}>{props.title}</h1>
            <p>{props.children}</p>
          </div>
        </StyledDiv>
      </>
    );
  } else {
    return (
      <>
        <img style={{ width: '50%', opacity: '0.8' }} src={props.img} alt={props.img} />
      </>
    );
  }
};
