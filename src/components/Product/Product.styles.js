// src/components/Product/Product.styles.js

import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  border: 1px solid #E66767;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: -10px;
  width: 100%; 
  background-color: #fff;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s;
  font-family: 'Roboto', sans-serif;
  width: 650px; /* Aumenta a largura do card */
  height: 480px; /* Aumenta a altura do card */

  &:hover {
    transform: translateY(-10px);
  }
`;


export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 5px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const TitleRatingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #e66767;
`;

export const Title = styled.h2`
  font-size: 26px;
  margin-bottom: 10px;
  color: #E66767;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #e66767
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
`;

export const Price = styled.p`
  font-size: 20px;
  color: #E66767;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 20px;
  color: #E66767;
  font-family: 'Roboto', sans-serif;
  flex: 1;
  text-align: justify;
`;

export const Button = styled.button`
  background-color: #e66767;
  color: #FFEBD9;
  border: none;
  border-radius: 2px;
  padding: 6px 6px;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  font-family: 'roboto', sans-serif;
  align-self: baseline;

  &:hover {
    background-color: #ff6347;
  }
`;

export const TagsContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  font-size: 12px;
  font-family: 'roboto', sans-serif;
  font-weight: 700;
`;
