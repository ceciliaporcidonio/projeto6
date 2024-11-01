import styled from 'styled-components';

export const BannerContainer = styled.div`
  position: relative;
  background-color: #FFF8F2;
  width: 1860px;
  height: 400px;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 384px;
  position: absolute; /* Modificado para melhorar o empilhamento */
  top: 0;
`;

export const BannerText = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  color: #E66767;
  font-family: 'Roboto', sans-serif;
  font-size: 36px;
  font-weight: 900;
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
