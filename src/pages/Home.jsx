// src/pages/Home.jsx
import React from 'react';
import Banner from '../components/Banner/Banner';
import ProductList from '../components/ProductList/ProductList';
import { HomeContainer } from './Home.styles';

const Home = () => (
  <HomeContainer>
    <Banner />
    <ProductList />
  </HomeContainer>
);

export default Home;
