// src/components/Banner/Banner.styles.js
import styled from 'styled-components';

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BannerText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #E66767;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  font-family: 'Arial', sans-serif; 
`;

export const Logo = styled.img`
  position: absolute;
  top: 20%;
  left: 50%;
  width: 110px;
  height: auto;
`;
