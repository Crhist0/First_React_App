import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { styled as Styled } from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

export const StyledLink = styled(Link)`
  color: #067bfc;
  text-decoration: none;
  font-weight: bolder;
  cursor: pointer;
`;
export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;
export const HalfWrapper = styled.div`
  width: 50%;
  padding: 7rem;
`;
export const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const StyledIcon = Styled(CatchingPokemonIcon)({
  margin: '0.25rem 0.7rem 0rem',
  fontSize: '0.6rem',
  color: 'black',
});
