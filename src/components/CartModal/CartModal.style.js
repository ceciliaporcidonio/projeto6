// src/components/CartModal/CartModalStyle.js

import styled from 'styled-components';


export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: flex-end;
  z-index: 1000; /* Garante que o overlay do carrinho fique sobre outros modais */
`;

export const Sidebar = styled.div`
  width: 360px;
  height: 1624px;
  background: #e66767;
  padding-top: 32px;
  color: #ffebd9;
  font-weight: 900;
  font-family: 'roboto', sans-serif;
  font-size: 24px;
`;

export const CartItems = styled.div`
    margin-bottom: 30px;
    font-weight: 700;
    font-family: 'roboto', sans-serif;
    font-size: 18px;
  padding: 8px 8px 8px 8px; /* Adiciona espaço na direita */
`;

export const CartItem = styled.div`
  width: 100%; /* Reduz a largura para dar espaço nas laterais */
  max-width: 320px; /* Define um limite máximo de largura */
  height: 100px;
  display: flex;
  background: #ffebd9;
  align-items: center;
  margin: 10px 5px; /* Centraliza cada item no contêiner */

  img {
    width: 80px;
    height: 80px;
    margin-right: 10px;
    margin-left: 10px;
    object-fit: cover;/
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative; /* Permite posicionamento absoluto do ícone */
  margin-bottom: 20px;

  h3 {
    font-size: 18px;
    color: #e66767;
    font-weight: 900;
    line-height: 21,09px;
    margin: 0;
  }`;


 export const ItemPrice = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: #e66767;
  font-weight: 400;
  margin: 15px 0 0; /* Margem para posicionar logo abaixo do nome */
`;

export const ItemButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: -24px;
  right: -4px;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const Total = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-top: auto;
  line-height: 16,41px;
  display: flex;
  justify-content: space-between; /* Alinha o texto e o valor nas extremidades */
  padding: 0px 30px 0px 10px; /* Espaçamento interno opcional */
`;

export const ActionButton = styled.button`
  width: 324px;
  height: 24px;
  background: #ffe4e1;
  color: #e66767;
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  line-height: 16,41px;
  align-items: center;
  margin-right: 200px;
  margin-left: 10px;
  `;

export const DeliveryForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #ffebd9;

  label {
    font-weight: bold;
    color:  #ffebd9;
  }

  input {
    padding: 8px;
    border: 1px solid #e66767;
    border-radius: 4px;
    font-size: 16px;
     background-color: #FFEBD9; /* Cor de fundo dos campos */
  }
`;

export const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #ffe4e1;

  label {
    font-weight: bold;
  }

  input {
   padding: 8px;
    border: 1px solid #e66767;
    border-radius: 4px;
    font-size: 16px;
    background-color: #FFEBD9; /* Cor de fundo dos campos */
  }
`;

export const OrderConfirmation = styled.div`
  text-align: center;
  color: #ffe4e1;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;

  h2 {
    color: #ffe4e1;
    margin-bottom: 15px;
  }

  p {
    margin-bottom: 10px;
    font-size: 16px;
    color: #ffe4e1;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 15px; /* Espaço entre os campos */
`;

export const HalfWidthInput = styled.input`
  flex: 1;
`;

