// src/components/Banner/Banner.styles.js
import styled from 'styled-components';

export const BannerContainer = styled.div`
  position: relative;
  background-image: url(${props => props.src || 'fallback-image.jpg'});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 400px;
  top: 0px;
  background-color: #FFF8F2;

`;

export const BannerImage = styled.img`
  width: 100%;
  height: 384px;
  top: -24px;
`;

export const BannerText = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  color: #E66767;
  font-family: 'Roboto', sans-serif;
  font-size: 36px;
  font-weight: 900;
  line-height: 42.19px;
  width: 700px;
  height: 84px;
  top: 50%;
  left: 50%;
  text-align: center;
`;

export const Logo = styled.img`
  position: absolute;
  height: 57.5px;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 125px;
`;
