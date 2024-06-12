// src/components/Product/Product.styles.js
import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  border: 5px solid #E66767;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 20px;
  width: 472px; 
  height: 398px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s;

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
  padding: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const TitleRatingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: #E66767;
  font-family: 'Arial', sans-serif;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: #f39c12;
  font-family: 'Arial', sans-serif;
`;

export const Price = styled.p`
  font-size: 1.2rem;
  color: #E66767;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #E66767;
  font-family: 'Arial', sans-serif;
  margin-bottom: 20px;
  flex: 1;
`;

export const Button = styled.button`
  background-color: #ff6347;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  &:hover {
    background-color: #ff4500;
  }
  font-family: 'Arial', sans-serif;
  align-self: center;
`;

export const TagsContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;
