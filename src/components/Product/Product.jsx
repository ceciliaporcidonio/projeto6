import React from 'react';
import {
  Card,
  ImageContainer,
  Image,
  Content,
  TitleRatingContainer,
  Title,
  Rating,
  Description,
  Button,
  TagsContainer,
  Price
} from './Product.styles';
import Tag from '../Tag/Tag.tsx';

const Product = ({ image, title, description, rating, tags, price }) => (
  <Card>
    <ImageContainer>
      <Image src={image} alt={title} />
    </ImageContainer>
    <TagsContainer>
      {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
    </TagsContainer>
    <Content>
      <TitleRatingContainer>
        <Title>{title}</Title>
        <Rating>{rating} <span>⭐</span></Rating>
      </TitleRatingContainer>
      <Price>{price}</Price>
      <Description>{description}</Description>
      <Button>Saiba mais</Button>
    </Content>
  </Card>
);

export default Product;
