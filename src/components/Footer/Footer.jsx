import React from 'react';
import { FooterContainer, FooterLogo, SocialIcons, SocialIcon, FooterText } from './Footer.styles';
import logo from '../../images/logo.png';
import instagramIcon from '../../images/instagram.png';
import facebookIcon from '../../images/facebook.png';
import twitterIcon from '../../images/twitter.png';

const Footer = () => (
  <FooterContainer>
    <FooterLogo src={logo} alt="Efood logo" />
    <SocialIcons>
      <SocialIcon src={instagramIcon} alt="Instagram" />
      <SocialIcon src={facebookIcon} alt="Facebook" />
      <SocialIcon src={twitterIcon} alt="Twitter" />
    </SocialIcons>
    <FooterText>
      A efood é uma plataforma para divulgação de estabelecimentos. A responsabilidade pela entrega e <br />a qualidade dos produtos é toda do estabelecimento contratado.
    </FooterText>
  </FooterContainer>
);

export default Footer;
