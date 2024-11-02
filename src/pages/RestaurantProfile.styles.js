// src/pages/RestaurantProfile.styles.js
import styled from 'styled-components';
import bannerImage from '../images/banner.png'; // Certifique-se de que a imagem está no local correto

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 120vh;
  overflow: hidden;
  background-color: #FFF8F2;
  width: 100%;
  max-width: 1900px;
  margin: auto;
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
  font-size: 20px;
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
  width: 500px;
  height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;


  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  div {
    padding: 5px;
    text-align: left;
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h3 {
      font-weight: 900;
      font-family: 'roboto', sans-serif;
      font-size: 22px;
      margin-bottom: 10px;
      color: #ffebd9;
      white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; /* Truncamento do título */
  }

    p {
      font-size: 18px;
      color: #ffebd9;
      font-family: 'roboto', sans-serif;
      font-weight: 400;
      overflow: hidden;
    text-overflow: ellipsis; /* Truncamento da descrição */
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Número de linhas antes do truncamento */
    -webkit-box-orient: vertical;
    }

    span {
      font-size: 18px;
      color: #ffebd9;
      font-weight: bold;
      margin: 10px 0;
    }

    button {
      width: 100%;
      display:flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      padding: 8px 202px;
      background-color: #ffebd9;
      color: #e66767;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      transition: background-color 0.3s;
      font-weight: 700;
      font-size: 20px;
      margin-top: auto;
      height: 40px; /* Define altura fixa */
      bottom: 10px; /* Define o botão na parte inferior do card */

      &:hover {
        background-color: #fff8e3;
      }
    }
  }
`;

// Overlay do modal
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 1000; /* Maior prioridade para o overlay do modal */
`;

export const ModalContainer = styled.div`
width: 1000px;
  height: 280px;
  background: #E66767;
  display: flex;
  padding: 30px;
  gap: 20px;
  align-items: flex-start;
  border-radius: 10px;
  position: relative; /* Permite que elementos internos usem position absoluta */
`;

// Título do prato no modal
export const Title = styled.h2`
  font-size: 24px;
  font-weight: 800;
  color: #FFFFFF;
  margin: 0;
  font-family: 'roboto', sans-serif;
  margin-bottom: 35px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: #FFFFFF;
  width: 100%;
  


      span {
      font-size: 20px;
      color: #FFFFFF;
      font-family: 'roboto', sans-serif;
      align-self: flex-start; /* Alinhamento ao início */
      margin-bottom: 35px;
      }
`;

// Descrição do prato
export const Description = styled.p`
  font-size: 20px;
  color: #FFFFFF;
  font-family: 'roboto', sans-serif;
  margin-bottom: 15px;
  display: block;


`;

// Imagem do prato
export const DishImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 10px;
`;

// Botão de fechar
export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  cursor: pointer;
  color: #FFFFFF;
  font-size: 16px;
`;

// Botão "Adicionar ao Carrinho"
export const ActionButton = styled.button`
  width: 380px;
  height: 40px;
  background: #FFEBD9;
  border: none;
  color: #E66767;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  border-radius: 5px;

  &:hover {
    background-color: #fff8e3;
  }
`;

