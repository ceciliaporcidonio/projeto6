// src/components/ProductList/ProductList.styles.js
import styled from 'styled-components';

export const ProductGrid = styled.div`
  width: 1600px;
  height: 1550px;
  margin: -380px 0px; /* Centraliza o grid */
  padding-top: 20px; /* Espaçamento superior opcional */
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 colunas para os cards */
  gap: 40px; /* Sem espaçamento entre os cards */
  position: relative;
  top: 440px;
  left: 220px;
  background: #FFF8F2; /* Fundo opcional */
  opacity: 0px;
  `;

// Estilos específicos para cada card de restaurante
export const RestauranteCard1 = styled.div`
  top: 440px;
  left: 171px;
  opacity: 1;
`;


export const RestauranteCard2 = styled(RestauranteCard1)`
  top: 440px;
  left: 723px;
`;

export const RestauranteCard3 = styled(RestauranteCard1)`
  top: 886px;
  left: 171px;
`;

export const RestauranteCard4 = styled(RestauranteCard1)`
  top: 886px;
  left: 723px;
`;

export const RestauranteCard5 = styled(RestauranteCard1)`
  top: 1332px;
  left: 171px;
`;

export const RestauranteCard6 = styled(RestauranteCard1)`
  top: 1332px;
  left: 723px;
`;
