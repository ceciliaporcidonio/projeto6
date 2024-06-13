// src/pages/RestaurantProfile.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProfileBanner, ProfileContainer, RestaurantInfo, RestaurantName, Menu, MenuItem, Logo, HeaderContainer, HeaderLink, CartInfo, CuisineType } from './RestaurantProfile.styles';
import logo from '../images/logo.png';
import sushiImage from '../images/image1.png';
import italiaImage from '../images/image2.png';
import burgerImage from '../images/image3.png';
import pizzaImage from '../images/image4.png';
import Footer from '../components/Footer/Footer';

const restaurantData = {
  1: {
    name: 'Sushi Comida crua',
    image: sushiImage,
    cuisine: 'Japonês',
    menu: [
      { name: 'Temaki', description: 'A clássica Margherita...', price: 'R$ 25,00', image: sushiImage },
      { name: 'Temaki', description: 'A clássica Margherita...', price: 'R$ 25,00', image: sushiImage },
      { name: 'Sashimi', description: 'A clássica Margherita...', price: 'R$ 25,00', image: sushiImage },
      { name: 'Temaki', description: 'A clássica Margherita...', price: 'R$ 25,00', image: sushiImage },
      { name: 'Temaki', description: 'A clássica Margherita...', price: 'R$ 25,00', image: sushiImage },
      { name: 'Temaki', description: 'A clássica Margherita...', price: 'R$ 25,00', image: sushiImage },
    ]
  },
  2: {
    name: 'La Dolce Vita Trattoria',
    image: italiaImage,
    cuisine: 'Italiana',
    menu: [
      { name: 'Pizza Margherita', description: 'A clássica Margherita...', price: 'R$ 25,00', image: italiaImage },
      { name: 'Spaghetti Carbonara', description: 'Spaghetti com molho Carbonara...', price: 'R$ 30,00', image: italiaImage },
      { name: 'Spaghetti Carbonara', description: 'Spaghetti com molho Carbonara...', price: 'R$ 30,00', image: italiaImage },
      { name: 'Spaghetti Carbonara', description: 'Spaghetti com molho Carbonara...', price: 'R$ 30,00', image: italiaImage },
      { name: 'Spaghetti Carbonara', description: 'Spaghetti com molho Carbonara...', price: 'R$ 30,00', image: italiaImage },
      { name: 'Spaghetti Carbonara', description: 'Spaghetti com molho Carbonara...', price: 'R$ 30,00', image: italiaImage },
    ]
  },
  3: {
    name: 'Hamburgão da esquina',
    image: burgerImage,
    cuisine: 'Americana',
    menu: [
      { name: 'Cheeseburger', description: 'A clássica Margherita...', price: 'R$ 25,00', image: burgerImage },
      { name: 'Cheeseburger', description: 'A clássica Margherita...', price: 'R$ 25,00', image: burgerImage },
      { name: 'Cheeseburger', description: 'A clássica Margherita...', price: 'R$ 25,00', image: burgerImage },
      { name: 'Cheeseburger', description: 'A clássica Margherita...', price: 'R$ 25,00', image: burgerImage },
      { name: 'Cheeseburger', description: 'A clássica Margherita...', price: 'R$ 25,00', image: burgerImage },
      { name: 'Cheeseburger', description: 'A clássica Margherita...', price: 'R$ 25,00', image: burgerImage },
    ]
  },
  4: {
    name: 'La Dolce Vita Trattoria',
    image: italiaImage,
    cuisine: 'Italiana',
    menu: [
      { name: 'Pizza Margherita', description: 'A clássica Margherita...', price: 'R$ 25,00', image: italiaImage },
      { name: 'Spaghetti Carbonara', description: 'Spaghetti com molho Carbonara...', price: 'R$ 30,00', image: italiaImage },
      { name: 'Spaghetti Carbonara', description: 'Spaghetti com molho Carbonara...', price: 'R$ 30,00', image: italiaImage },
      { name: 'Spaghetti Carbonara', description: 'Spaghetti com molho Carbonara...', price: 'R$ 30,00', image: italiaImage },
      { name: 'Spaghetti Carbonara', description: 'Spaghetti com molho Carbonara...', price: 'R$ 30,00', image: italiaImage },
      { name: 'Spaghetti Carbonara', description: 'Spaghetti com molho Carbonara...', price: 'R$ 30,00', image: italiaImage },
    ]
  },
  5: {
    name: 'Pizzaria Forno Mágico',
    image: pizzaImage,
    cuisine: 'Italiana',
    menu: [
      { name: 'Pizza Margherita', description: 'A clássica Margherita...', price: 'R$ 25,00', image: pizzaImage },
      { name: 'Spaghetti Carbonara', description: 'Spaghetti com molho Carbonara...', price: 'R$ 30,00', image: pizzaImage },
      { name: 'Spaghetti Carbonara', description: 'Spaghetti com molho Carbonara...', price: 'R$ 30,00', image: pizzaImage },
      { name: 'Spaghetti Carbonara', description: 'Spaghetti com molho Carbonara...', price: 'R$ 30,00', image: pizzaImage },
      { name: 'Spaghetti Carbonara', description: 'Spaghetti com molho Carbonara...', price: 'R$ 30,00', image: pizzaImage },
      { name: 'Spaghetti Carbonara', description: 'Spaghetti com molho Carbonara...', price: 'R$ 30,00', image: pizzaImage },
    ]
  },
  6: {
    name: 'La Dolce Vita Trattoria',
    image: italiaImage,
    cuisine: 'Italiana',
    menu: [
      { name: 'Pizza Margherita', description: 'A clássica Margherita...', price: 'R$ 25,00', image: italiaImage },
      { name: 'Spaghetti Carbonara', description: 'Spaghetti com molho Carbonara...', price: 'R$ 30,00', image: italiaImage },
      { name: 'Spaghetti Carbonara', description: 'Spaghetti com molho Carbonara...', price: 'R$ 30,00', image: italiaImage },
      { name: 'Spaghetti Carbonara', description: 'Spaghetti com molho Carbonara...', price: 'R$ 30,00', image: italiaImage },
      { name: 'Spaghetti Carbonara', description: 'Spaghetti com molho Carbonara...', price: 'R$ 30,00', image: italiaImage },
      { name: 'Spaghetti Carbonara', description: 'Spaghetti com molho Carbonara...', price: 'R$ 30,00', image: italiaImage },
    ]
  },
};

const RestaurantProfile = () => {
  const { id } = useParams();
  const restaurant = restaurantData[id];

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <ProfileContainer>
      <HeaderContainer>
        <HeaderLink href="/">Restaurantes</HeaderLink>
        <Link to="/">
          <Logo src={logo} alt="Logo" />
        </Link>
        <CartInfo>0 produto(s) no carrinho</CartInfo>
      </HeaderContainer>
      <ProfileBanner>
        <img src={restaurant.image} alt={restaurant.name} />
        <div className="overlay"></div> {/* Esta é a camada com a transparência */}
        <CuisineType>{restaurant.cuisine}</CuisineType>
        <RestaurantName>{restaurant.name}</RestaurantName>
      </ProfileBanner>
      <Menu>
        {restaurant.menu.map((item, index) => (
          <MenuItem key={index}>
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span>{item.price}</span>
              <button>Adicionar ao Carrinho</button>
            </div>
          </MenuItem>
        ))}
      </Menu>
    </ProfileContainer>
  );
};

export default RestaurantProfile;
