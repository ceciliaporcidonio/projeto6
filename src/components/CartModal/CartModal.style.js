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

export const PrimaryActionButton = styled.button`  width: 324px;
  height: 24px;
  background: #ffebd9;
  color: #e66767;
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  line-height: 16,41px;
  align-items: center;
  margin-right: 200px;
  margin-left: 10px;
  `;

  export const TitleContainer = styled.div`
  padding: 0 10px;
  font-size: 16px;
  color: #ffebd9;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 20px; /* Espaço entre o título e o formulário */
  text-align: justify;
`;

// src/components/CartModal/CartModalStyle.js

export const DeliveryForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #ffebd9;
  line-height: 16,41px;

  label {
    font-weight: bold;
    color: #ffebd9;
    margin-left: 10px;
    margin-bottom: -8px;
  }

  input {
    border: 1px solid #e66767;
    background-color: #FFEBD9;
    width: flex;
    height: 32px;
    margin-left: 10px;
    padding: 4px 8px;
    margin-right: 20px;
  }
`;

export const SecondaryActionButton = styled.button`
  width: 324px;
  height: 24px;
  background: #ffebd9;
  color: #e66767;
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  margin: 0 10px 0 10px;
  line-height: 16px;
  text-align: center;
`;

export const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 16,41px;
  color: #ffebd9;

  label {
    font-weight: bold;
        margin-left: 10px;
  }

   input {
    border: 1px solid #e66767;
    font-size: 16px;
    background-color: #FFEBD9;
    width: flex;
    height: 32px;
    margin-left: 10px;
    margin-right: 25px;
  }
`;

export const OrderConfirmation = styled.div`

  p {
    margin-bottom: 10px;
    font-size: 14px;
    color: #ffebd9;
    font-weight: 400;
    line-height: 22px;
    text-align: justify;
    margin-left: 10px;
    margin-right: 25px;
    padding: 5px;
    }
`;

export const Row = styled.div`
  display: flex;
  gap: 10px;
  margin-right: 25px;
    margin-bottom: 5px;
`;


export const HalfWidthInput = styled.input`
  width: 140px;
  height: 32px;
`;

export const SmallInput = styled.input`
  width: 82px;
  height: 32px;
`;

export const MediumInput = styled.input`
  width: 198px;
  height: 32px;
  `;

  export const LargeInput = styled.input`
  width: 324px;
  height: 32px;
`;
