// src/pages/RestaurantProfile.styles.js
import styled from 'styled-components';
import bannerImage from '../images/banner.png'; // Certifique-se de que a imagem está no local correto

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 150vh;
  overflow: hidden;
  background-color: #FFF8F2;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 50px 20px;
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: center;
  background-color: #fff8f2;
  color: #fff;
`;

export const HeaderLink = styled.a`
  text-decoration: none;
  font-size: 18px;
  color: #e66767;
  font-weight: 900;
  font-family: 'roboto', sans-serif; 
`;

export const Logo = styled.img`
  height: 60px;
  width: auto;
`;

export const CartInfo = styled.div`
  font-size: 18px;
  color: #e66767;
  font-weight: 900;
  font-family: 'roboto', sans-serif; 
`;

export const ProfileBanner = styled.div`
  width: 100%;
  position: relative;
  color: #fff;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    left: 0;
    width: 100%;
    height: 300px;
    top: 0px;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2); /* Camada escura e transparente */
  }

  & > div {
    position: relative;
    z-index: 1;
  }
`;

export const CuisineType = styled.h2`
  position: absolute;
  top: 20px;
  left: 100px;
  padding: 10px;
  font-size: 32px;
  color: #fff;
  font-weight: 100;
  font-family: 'roboto', sans-serif;
  z-index: 2; /* Certifique-se de que o z-index é maior que a camada de transparência */
  text-align: left;
`;

export const RestaurantName = styled.h1`
  position: absolute;
  bottom: 20px;
  left: 100px;
  padding: 10px;
  font-size: 32px;
  color: #fff;
  font-weight: 900;
  font-family: 'roboto', sans-serif;
  z-index: 2; /* Certifique-se de que o z-index é maior que a camada de transparência */
`;

export const RestaurantInfo = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #fff8f2;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 90px;
  margin-bottom: 70px;
  font-family: 'roboto', sans-serif;
  background-color: #FFF8F2;
`;

export const MenuItem = styled.div`
  background-color: #e66767;
  border: 2px solid #e66767;
  border-radius: 1px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 420px;
  height: 360px;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  div {
    padding: 5px;
    text-align: left;

    h3 {
      font-weight: 900;
      font-family: 'roboto', sans-serif;
      font-size: 16px;
      margin-bottom: 10px;
      color: #ffebd9;
    }

    p {
      font-size: 14px;
      color: #ffebd9;
      font-family: 'roboto', sans-serif;
      font-weight: 400;
    }

    span {
      font-size: 14px;
      color: #ffebd9;
      font-weight: bold;
      display: block;
      margin: 10px 0;
    }

    button {
      padding: 8px 120px;
      background-color: #ffebd9;
      color: #e66767;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      transition: background-color 0.3s;
      font-weight: 700;
      font-size: 16px;

      &:hover {
        background-color: #fff8e3;
      }
    }
  }
`;
