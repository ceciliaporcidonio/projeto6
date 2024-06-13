// src/components/ProductList/ProductList.styles.js
import styled from 'styled-components';

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 20px;
  padding: 30px;
  background-color: #fff8f2;display: grid;
  justify-items: center;
  align-content: stretch;
`;
