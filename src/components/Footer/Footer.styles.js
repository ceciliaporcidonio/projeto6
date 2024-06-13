// src/components/Footer/Footer.styles.js
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #FFE5D4;
  text-align: center;
  padding: 20px 20px;
  color: #E66767;
  height: 298px;
  align-items: center;
`;

export const FooterLogo = styled.img`
  width: 125px;
  height: 57.5px;
  top: 1890px;
  left: 621px;
  gap: 0px;
  opacity: 0px;
  bottom: 30px;
  margin: 10px;
`;

export const SocialIcons = styled.div`
height: 100px;
top: 1980px;
left: 639px;
gap: 0px;
opacity: 0px;
`;

export const SocialIcon = styled.img`
  margin: 0px 12px;
  cursor: pointer;
  height: 24px;
  top: 1980px;
  left: 703px;
  margin: 5px;
`;

export const FooterText = styled.p`
  height: 60px;
  top: 2084px;
  left: 444px;
  gap: 0px;
  opacity: 0px;
  color:#E66767;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
  font-weight: 400;
  line-height: 9.72px;
  text-align: center;
  margin: 20px;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
