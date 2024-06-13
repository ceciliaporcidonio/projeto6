import styled from 'styled-components';
import bannerImage from '../images/banner.png';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 150vh;
  overflow: hidden;
  background-color: #FFF8F2;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 20px;
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: center;
  background-color: #fff8f2;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 30px 10px;
  }
`;

export const HeaderLink = styled.a`
  text-decoration: none;
  font-size: 18px;
  color: #e66767;
  font-weight: 900;
  font-family: 'roboto', sans-serif;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Logo = styled.img`
  height: 60px;
  width: auto;

  @media (max-width: 768px) {
    height: 50px;
  }
`;

export const CartInfo = styled.div`
  font-size: 18px;
  color: #e66767;
  font-weight: 900;
  font-family: 'roboto', sans-serif;

  @media (max-width: 768px) {
    font-size: 16px;
  }
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
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
  }

  & > div {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    img {
      height: 200px;
    }

    .overlay {
      height: 200px;
    }
  }
`;

export const RestaurantName = styled.h1`
  position: absolute;
  bottom: 20px;
  left: 20px;
  padding: 10px;
  font-size: 32px;
  color: #fff;
  font-weight: 900;
  font-family: 'roboto', sans-serif;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 24px;
    bottom: 10px;
    left: 10px;
  }
`;

export const CuisineType = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 10px;
  font-size: 18px;
  color: #fff;
  font-weight: 700;
  font-family: 'roboto', sans-serif;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 16px;
    top: 10px;
    left: 10px;
  }
`;

export const RestaurantInfo = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #fff8f2;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Menu = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 90px;
  margin-bottom: 70px;
  font-family: 'roboto', sans-serif;
  background-color: #FFF8F2;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
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

      @media (max-width: 768px) {
        padding: 8px 60px;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;
