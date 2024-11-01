// src/components/ProductList/ProductList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import sushiImage from '../../images/image1.png';
import italiaImage from '../../images/image2.png';
import burgerImage from '../../images/image3.png';
import pizzaImage from '../../images/image4.png';
import { RestauranteCard1, RestauranteCard2, RestauranteCard3, RestauranteCard4, RestauranteCard5, RestauranteCard6, ProductGrid } from './ProductList.styles';

const products = [
  {
    id: 1,
    image: sushiImage,
    title: 'Sushi Comida crua',
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: 4.5,
    tags: ['Japonês', 'Destaque da semana'],
    price: 'R$ 10,00',
    category: 'Japonês',
    component: RestauranteCard1
  },
  {
    id: 2,
    image: italiaImage,
    title: 'La Dolce Vita Trattoria',
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: 4.6,
    tags: ['Italiana'],
    price: 'R$ 25,00',
    category: 'Italiana',
    component: RestauranteCard2
  },
  {
    id: 3,
    image: burgerImage,
    title: 'Hambugão da Esquina',
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: 4.4,
    tags: ['Americana'],
    price: 'R$ 8,00',
    category: 'Americana',
    component: RestauranteCard3
  },
  {
    id: 4,
    image: italiaImage,
    title: 'La Dolce Vita Trattoria',
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: 4.6,
    tags: ['Italiana'],
    price: 'R$ 28,00',
    category: 'Italiana',
    component: RestauranteCard4
  },
  {
    id: 5,
    image: pizzaImage,
    title: 'Pizzaria Forno Mágico',
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: 4.6,
    tags: ['Italiana'],
    price: 'R$ 12,00',
    category: 'Italiana',
    component: RestauranteCard5
  },
  {
    id: 6,
    image: italiaImage,
    title: 'La Dolce Vita Trattoria',
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: 4.6,
    tags: ['Italiana'],
    price: 'R$ 27,00',
    category: 'Italiana',
    component: RestauranteCard6
  }
];

const ProductList = () => (
  <ProductGrid>
    {products.map(({ id, component: Component, ...product }) => (
      <Link to={`/restaurant/${id}`} key={id} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Component>
          <Product {...product} />
        </Component>
      </Link>
    ))}
  </ProductGrid>
);

export default ProductList;
