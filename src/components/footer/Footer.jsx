import React from 'react';
import { StyledIcon, StyledLink, HalfWrapper, IconsWrapper, FooterWrapper } from './styled';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
export const Footer = (props) => {
  return (
    <FooterWrapper>
      <HalfWrapper>
        <IconsWrapper>
          <StyledLink to={'/cards'}>About</StyledLink>
          <StyledIcon />
          <StyledLink to={'/news'}>Contact</StyledLink>
          <StyledIcon />
          <StyledLink to={'/login'}>Terms of use</StyledLink>
          <StyledIcon />
          <StyledLink to={'/landing'}>Privacy Policy</StyledLink>
        </IconsWrapper>
        <p style={{ color: 'grey' }}>Your Website 2022. All Rights Reserved.</p>
      </HalfWrapper>
      <HalfWrapper style={{ display: 'flex', flexDirection: 'row-reverse' }}>
        <FacebookIcon style={{ cursor: 'pointer', fontSize: '3rem', color: '#067BFC' }} />
        <TwitterIcon
          style={{ cursor: 'pointer', fontSize: '3rem', margin: '0rem 2rem', color: '#067BFC' }}
        />
        <InstagramIcon style={{ cursor: 'pointer', fontSize: '3rem', color: '#067BFC' }} />
      </HalfWrapper>
    </FooterWrapper>
  );
};
