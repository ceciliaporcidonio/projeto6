// src/components/ProductList/ProductList.jsx
import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import sushiImage from '../../images/image1.png';
import italiaImage from '../../images/image2.png';
import burgerImage from '../../images/image3.png';
import pizzaImage from '../../images/image4.png';
import { ProductGrid } from './ProductList.styles'; // Importação correta

const StyledLink = styled(Link)`
  text-decoration: none;  /* Remove o sublinhado dos links */
  color: inherit;  /* Herda a cor do pai */
`;

const products = [
  {
    id: 1,
    image: sushiImage,
    title: 'Sushi Comida crua',
    description: 'Ingredientes frescos e um buffet com a maior variedade da culinária oriental.',
    rating: 4.5,
    tags: ['Japonês'],
    price: 'R$ 10,00',
    category: 'Japonês'
  },
  {
    id: 2,
    image: italiaImage,
    title: 'La Dolce Vita Trattoria',
    description: 'A La Dolce Vita Trattoria é conhecida por seus autênticos sabores italianos...',
    rating: 4.6,
    tags: ['Italiana'],
    price: 'R$ 25,00',
    category: 'Italiana'
  },
  {
    id: 3,
    image: burgerImage,
    title: 'Hambugão da Esquina',
    description: 'Hamburguer de 150g, pão brioche, queijo cheddar, maionese, alface americana...',
    rating: 4.4,
    tags: ['Americana'],
    price: 'R$ 8,00',
    category: 'Americana'
  },
  {
    id: 4,
    image: italiaImage,
    title: 'La Dolce Vita Trattoria',
    description: 'A La Dolce Vita Trattoria é conhecida por seus autênticos sabores italianos...',
    rating: 4.6,
    tags: ['Italiana'],
    price: 'R$ 25,00',
    category: 'Italiana'
  },
  {
    id: 5,
    image: pizzaImage,
    title: 'Pizzaria Forno Mágico',
    description: 'Pizza gigante com borda personalizada e mais de 30 sabores...',
    rating: 4.6,
    tags: ['Italiana'],
    price: 'R$ 12,00',
    category: 'Italiana'
  },
  {
    id: 6,
    image: italiaImage,
    title: 'La Dolce Vita Trattoria',
    description: 'A La Dolce Vita Trattoria é conhecida por seus autênticos sabores italianos...',
    rating: 4.6,
    tags: ['Italiana'],
    price: 'R$ 25,00',
    category: 'Italiana'
  }
];

const ProductList = () => (
  <ProductGrid>
    {products.map(product => (
      <StyledLink to={`/restaurant/${product.id}`} key={product.id}>
        <Product {...product} />
      </StyledLink>
    ))}
  </ProductGrid>
);

export default ProductList;
