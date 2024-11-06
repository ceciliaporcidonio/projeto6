// src/components/ProductList/ProductList.styles.js
import styled from 'styled-components';

export const ProductGrid = styled.div`
  width: 100%; 
  max-width: 1024px;
  margin: 70px auto; /* Centraliza o grid horizontalmente */
  display: grid;
  grid-template-columns: repeat(2, 472px); /* Duas colunas de 472px */
  grid-template-rows: auto;
  gap: 48px 80px;
  opacity: 1; /* Torna o grid visível */
`;

  export const RestauranteCard = styled.div`
  width: 472px;
  height: 398px;
  border: 1px solid #E66767;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  opacity: 1;
`;