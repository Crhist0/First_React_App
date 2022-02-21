import React from 'react';
import { StyledP } from '../card/styled';
import { StyledDiv, StyledH1 } from './styled';

// export const HalfCard = (props) => {
//   console.log('img', props.img);
//   if (!props.img) {
//     return (

//         <StyledDiv>
//           <div style={{ padding: '5rem' }}>
//             <h1 style={{ marginBottom: '1rem' }}>{props.title}</h1>
//             <p>{props.children}</p>
//           </div>
//         </StyledDiv>

//     );
//   } else {
//     return (
//         <img style={{ width: '50%', opacity: '0.8' }} src={props.img} alt={props.img} />
//     );
//   }
// };
import { useTheme } from 'styled-components';

export const HalfCard = ({ img, title, children }) => {
  const theme = useTheme();
  if (!img) {
    return (
      <StyledDiv>
        <div style={{ padding: '5rem' }}>
          <StyledH1>{title}</StyledH1>
          <p style={{ color: theme.textColor }}>{children}</p>
        </div>
      </StyledDiv>
    );
  } else {
    return (
      <>
        <img style={{ width: '50%', opacity: '0.8' }} src={img} alt={img} />
      </>
    );
  }
};
