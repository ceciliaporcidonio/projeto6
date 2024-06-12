import React from 'react';
import { BannerContainer, BannerImage, BannerText, Logo } from './Banner.styles';
import bannerImage from '../../images/banner.png';
import logo from '../../images/logo.png';

const Banner = () => (
  <BannerContainer>
    <BannerImage src={bannerImage} alt="Banner" />
    <BannerText>Viva experiências gastronômicas no conforto da sua casa</BannerText>
    <Logo src={logo} alt="efood logo" />
  </BannerContainer>
);

export default Banner;
