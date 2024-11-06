// src/components/Product/Product.styles.js

import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  border: 1px solid #E66767;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s;
  font-family: 'Roboto', sans-serif;
  width: 472px; /* Aumenta a largura do card */
  height: 398px; /* Aumenta a altura do card */
  margin: 0 auto;

  &:hover {
    transform: translateY(-10px);
  }
`;


export const ImageContainer = styled.div`
  width: 472px;
  height: 217px;
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
  width: 472;
  height: 181px;
`;

export const TitleRatingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #e66767;
`;

export const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 2px;
  color: #E66767;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  line-height: 21.09px;
  text-align: left;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #e66767
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
`;

export const Price = styled.p`
  font-size: 20px;
  color: #E66767;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #E66767;
  font-family: 'Roboto', sans-serif;
  flex: 1;
  line-height: 22px
`;

export const Button = styled.button`
  background-color: #e66767;
  color: #FFEBD9;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  font-family: 'roboto', sans-serif;
  text-align: center;
  width: 88px;
  height: 30px;
  line-height: 16,41px;
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
  line-height: 14,06px;
  text-align: center;
  `;
