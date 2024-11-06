// src/components/CartModal/CartModalStyle.js

import styled from 'styled-components';


export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  z-index: 1000; /* Garante que o overlay do carrinho fique sobre outros modais */
`;

export const Sidebar = styled.div`
  width: 460px;
  height: vh;
  background: #e66767;
  padding: 20px;
  color: #ffe4e1;
  font-weight: 900;
    font-family: 'roboto', sans-serif;
    font-size: 24px;
`;

export const CartItems = styled.div`
    flex-grow: 1; /* Permite que a lista ocupe o espaço disponível */
    overflow-y: auto; /* Adiciona barra de rolagem vertical */
    margin-bottom: 30px;
    font-weight: 700;
    font-family: 'roboto', sans-serif;
    font-size: 22px;
`;

export const CartItem = styled.div`
  width: 460px;
  height: 110px;
  display: flex;
  background: #ffebd9;
  align-items: center;
  margin: 10px 0;
  border-radius: 8px;

  img {
    width: 80px;
    height: 80px;
    margin-right: 15px;
    margin-left: 15px;
    object-fit: cover;/
    border-radius: 10px;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative; /* Permite posicionamento absoluto do ícone */
  margin-bottom: 20px;

  h3 {
    font-size: 20px;
    color: #e66767;
    margin: 0;
  }`;


 export const ItemPrice = styled.p`
  font-size: 16px;
  color: #e66767;
  font-weight: bold;
  margin: 15px 0 0 0; /* Margem para posicionar logo abaixo do nome */
`;

export const ItemButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: -12px;
  right: 8px;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const Total = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: auto;
`;

export const ActionButton = styled.button`
  width: 100%;
  height: 45px;
  background: #ffe4e1;
  color: #e66767;
  font-size: 22px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 8px;
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

