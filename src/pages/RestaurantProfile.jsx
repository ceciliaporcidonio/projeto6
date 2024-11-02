import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ProfileBanner,
  Overlay,
  ModalContainer,
  Title,
  Description,
  DishImage,
  CloseButton,
  ActionButton,
  TextContainer,
  ProfileContainer,
  RestaurantName,
  Menu,
  MenuItem,
  HeaderContainer,
  HeaderLink,
  CartInfo,
  CuisineType,
  Logo
  
} from './RestaurantProfile.styles';
import logo from '../images/logo.png';
import sushiImage from '../images/image1.png';
import italiaImage from '../images/image2.png';
import burgerImage from '../images/image3.png';
import pizzaImage from '../images/image4.png';

const restaurantData = {
  1: {
    name: 'Sushi Comida crua',
    image: sushiImage,
    cuisine: 'Japonês',
    menu: [
      {
        name: 'Temaki',
        description: 'Um delicioso temaki de salmão com sabor fresco e textura leve, perfeito para quem aprecia a culinária japonesa.',
        price: 'R$ 25,00',
        image: sushiImage,
        serve: 1,
      },
      {
        name: 'Sashimi',
        description: 'Fatias finas de atum fresco com textura delicada e sabor puro do mar, acompanhadas de molho shoyu e wasabi.',
        price: 'R$ 30,00',
        image: sushiImage,
        serve: 1,

      },
      {
        name: 'Temaki',
        description: 'Um delicioso temaki de salmão com sabor fresco e textura leve, perfeito para quem aprecia a culinária japonesa.',
        price: 'R$ 25,00',
        image: sushiImage,
        serve: 1,

      },
      {
        name: 'Sashimi',
        description: 'Fatias finas de atum fresco com textura delicada e sabor puro do mar, acompanhadas de molho shoyu e wasabi. Fatias finas de atum fresco com textura delicada e sabor puro do mar, acompanhadas de molho shoyu e wasabi. Fatias finas de atum fresco com textura delicada e sabor puro do mar, acompanhadas de molho shoyu e wasabi',
        price: 'R$ 50,00',
        image: sushiImage,
        serve: 2,
      },
      {
        name: 'Temaki',
        description: 'Um delicioso temaki de salmão com sabor fresco e textura leve, perfeito para quem aprecia a culinária japonesa.',
        price: 'R$ 25,00',
        image: sushiImage,
        serve: 1,
      },
      {
        name: 'Sashimi',
        description: 'Fatias finas de atum fresco com textura delicada e sabor puro do mar, acompanhadas de molho shoyu e wasabi.Fatias finas de atum fresco com textura delicada e sabor puro do mar, acompanhadas de molho shoyu e wasabi',
        price: 'R$ 30,00',
        image: sushiImage,
        serve: 1,
      }
      // Adicione outros pratos conforme necessário, seguindo o mesmo padrão
    ]
  },

    2: {
      name: 'La Dolce Vita Trattoria',
      image: italiaImage,
      cuisine: 'Italiana',
      menu: [
        {
          name: 'Espaguete Carbonara',
          description: 'Massa al dente com molho cremoso de parmesão e bacon crocante, seguindo a autêntica receita italiana.',
          price: 'R$ 30,00',
          image: italiaImage,
          serve: 2,
        },
        {
          name: 'Lasanha',
          description: 'Deliciosas camadas de massa intercaladas com molho à bolonhesa, queijo derretido e um toque de manjericão fresco, proporcionando uma experiência saborosa e reconfortante.',
          price: 'R$ 57,90',
          image: italiaImage,
          serve: 3,
        },
        {
          name: 'Espaguete Carbonara',
          description: 'Massa al dente com molho cremoso de parmesão e bacon crocante, seguindo a autêntica receita italiana.',
          price: 'R$ 32,00',
          image: italiaImage,
          serve: 2
        },
        {
          name: 'Lasanha',
          description: 'Deliciosas camadas de massa intercaladas com molho à bolonhesa, queijo derretido e um toque de manjericão fresco, proporcionando uma experiência saborosa e reconfortante.',
          price: 'R$ 55,90',
          image: italiaImage,
          serve: 3
        },
        {
          name: 'Espaguete Carbonara',
          description: 'Massa al dente com molho cremoso de parmesão e bacon crocante, seguindo a autêntica receita italiana.',
          price: 'R$ 35,00',
          image: italiaImage,
          serve: 2
        },
        {
          name: 'Lasanha',
          description: 'Deliciosas camadas de massa intercaladas com molho à bolonhesa, queijo derretido e um toque de manjericão fresco, proporcionando uma experiência saborosa e reconfortante.',
          price: 'R$ 59,90',
          image: italiaImage,
          serve: 3
        },
      ]
    },

    3: {
      name: 'Hamburgão da Esquina',
      image: burgerImage,
      cuisine: 'Americana',
      menu: [
        {
          name: 'Cheeseburger Clássico',
          description: 'Pão macio, hambúrguer suculento de carne bovina, queijo derretido, alface crocante e tomate fresco, finalizado com um toque de molho especial.',
          price: 'R$ 25,00',
          image: burgerImage,
          serve: 1
        },
        {
          name: 'Bacon Burger',
          description: 'Hambúrguer de carne bovina com fatias de bacon crocante, queijo cheddar, cebola caramelizada e molho barbecue, tudo em um pão artesanal.',
          price: 'R$ 28,00',
          image: burgerImage,
          serve: 1
        },
        {
          name: 'Cheeseburger Clássico',
          description: 'Pão macio, hambúrguer suculento de carne bovina, queijo derretido, alface crocante e tomate fresco, finalizado com um toque de molho especial.',
          price: 'R$ 25,00',
          image: burgerImage,
          serve: 1
        },
        {
          name: 'Bacon Burger',
          description: 'Hambúrguer de carne bovina com fatias de bacon crocante, queijo cheddar, cebola caramelizada e molho barbecue, tudo em um pão artesanal.',
          price: 'R$ 28,00',
          image: burgerImage,
          serve: 1
        },
        {
          name: 'Cheeseburger Clássico',
          description: 'Pão macio, hambúrguer suculento de carne bovina, queijo derretido, alface crocante e tomate fresco, finalizado com um toque de molho especial',
          price: 'R$ 25,00',
          image: burgerImage,
          serve: 1
        },
        {
          name: 'Bacon Burger',
          description: 'Hambúrguer de carne bovina com fatias de bacon crocante, queijo cheddar, cebola caramelizada e molho barbecue, tudo em um pão artesanal.',
          price: 'R$ 28,00',
          image: burgerImage,
          serve: 1
        },
      ]
    },

    4: {
      name: 'La Dolce Vita Trattoria',
      image: italiaImage,
      cuisine: 'Italiana',
      menu: [
        {
          name: 'Espaguete Carbonara',
          description: 'Massa al dente com molho cremoso de parmesão e bacon crocante, seguindo a autêntica receita italiana.',
          price: 'R$ 30,00',
          image: italiaImage,
          serve: 2,
        },
        {
          name: 'Lasanha',
          description: 'Deliciosas camadas de massa intercaladas com molho à bolonhesa, queijo derretido e um toque de manjericão fresco, proporcionando uma experiência saborosa e reconfortante.',
          price: 'R$ 57,90',
          image: italiaImage,
          serve: 3,
        },
        {
          name: 'Espaguete Carbonara',
          description: 'Massa al dente com molho cremoso de parmesão e bacon crocante, seguindo a autêntica receita italiana.',
          price: 'R$ 32,00',
          image: italiaImage,
          serve: 2
        },
        {
          name: 'Lasanha',
          description: 'Deliciosas camadas de massa intercaladas com molho à bolonhesa, queijo derretido e um toque de manjericão fresco, proporcionando uma experiência saborosa e reconfortante.',
          price: 'R$ 55,90',
          image: italiaImage,
          serve: 3
        },
        {
          name: 'Espaguete Carbonara',
          description: 'Massa al dente com molho cremoso de parmesão e bacon crocante, seguindo a autêntica receita italiana.',
          price: 'R$ 35,00',
          image: italiaImage,
          serve: 2
        },
        {
          name: 'Lasanha',
          description: 'Deliciosas camadas de massa intercaladas com molho à bolonhesa, queijo derretido e um toque de manjericão fresco, proporcionando uma experiência saborosa e reconfortante.',
          price: 'R$ 59,90',
          image: italiaImage,
          serve: 3
        },
      ]
    },

    5: {
      name: 'Pizzaria Forno Mágico',
      image: pizzaImage,
      cuisine: 'Italiana',
      menu: [
        {
          name: 'Pizza Margherita',
          description: 'Clássica pizza italiana com molho de tomate fresco, mussarela derretida e folhas de manjericão, celebrando simplicidade e sabor.',
          price: 'R$ 41,00',
          image: pizzaImage,
          serve: 3
        },
        {
          name: 'Pizza Quatro Queijos',
          description: 'Uma mistura irresistível de queijos mussarela, provolone, gorgonzola e parmesão sobre uma base de molho branco, ideal para quem ama queijos.',
          price: 'R$ 39,00',
          image: pizzaImage,
          serve: 3
        },
        {
          name: 'Pizza Margherita',
          description: 'Clássica pizza italiana com molho de tomate fresco, mussarela derretida e folhas de manjericão, celebrando simplicidade e sabor.',
          price: 'R$ 52,00',
          image: pizzaImage,
          serve: 4
        },
        {
          name: 'Pizza Quatro Queijos',
          description: 'Uma mistura irresistível de queijos mussarela, provolone, gorgonzola e parmesão sobre uma base de molho branco, ideal para quem ama queijos.',
          price: 'R$ 55,00',
          image: pizzaImage,
          serve: 4
        },
        {
          name: 'Pizza Margherita',
          description: 'Clássica pizza italiana com molho de tomate fresco, mussarela derretida e folhas de manjericão, celebrando simplicidade e sabor.',
          price: 'R$ 68,00',
          image: pizzaImage,
          serve: 5
        },
        {
          name: 'Pizza Quatro Queijos',
          description: 'Uma mistura irresistível de queijos mussarela, provolone, gorgonzola e parmesão sobre uma base de molho branco, ideal para quem ama queijos.',
          price: 'R$ 66,00',
          image: pizzaImage,
          serve: 5
        },
      ]
    },


    6: {
      name: 'La Dolce Vita Trattoria',
      image: italiaImage,
      cuisine: 'Italiana',
      menu: [
        {
          name: 'Espaguete Carbonara',
          description: 'Massa al dente com molho cremoso de parmesão e bacon crocante, seguindo a autêntica receita italiana.',
          price: 'R$ 30,00',
          image: italiaImage,
          serve: 2,
        },
        {
          name: 'Lasanha',
          description: 'Deliciosas camadas de massa intercaladas com molho à bolonhesa, queijo derretido e um toque de manjericão fresco, proporcionando uma experiência saborosa e reconfortante.',
          price: 'R$ 57,90',
          image: italiaImage,
          serve: 3,
        },
        {
          name: 'Espaguete Carbonara',
          description: 'Massa al dente com molho cremoso de parmesão e bacon crocante, seguindo a autêntica receita italiana.',
          price: 'R$ 32,00',
          image: italiaImage,
          serve: 2
        },
        {
          name: 'Lasanha',
          description: 'Deliciosas camadas de massa intercaladas com molho à bolonhesa, queijo derretido e um toque de manjericão fresco, proporcionando uma experiência saborosa e reconfortante.',
          price: 'R$ 55,90',
          image: italiaImage,
          serve: 3
        },
        {
          name: 'Espaguete Carbonara',
          description: 'Massa al dente com molho cremoso de parmesão e bacon crocante, seguindo a autêntica receita italiana.',
          price: 'R$ 35,00',
          image: italiaImage,
          serve: 2
        },
        {
          name: 'Lasanha',
          description: 'Deliciosas camadas de massa intercaladas com molho à bolonhesa, queijo derretido e um toque de manjericão fresco, proporcionando uma experiência saborosa e reconfortante.',
          price: 'R$ 59,90',
          image: italiaImage,
          serve: 3
        },
      ]
    },  };

const RestaurantProfile = () => {
  const { id } = useParams();
  const restaurant = restaurantData[id];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);

  const openModal = (dish) => {
    setSelectedDish(dish);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDish(null);
  };

  if (!restaurant) {
    return <div>Restaurante não encontrado</div>;
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
        <div className="overlay"></div>
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
              <span> - Serve {item.serve} pessoa(s)</span>
              <button onClick={() => openModal(item)}>Comprar</button> {/* Abre o modal com o item selecionado */}
            </div>
          </MenuItem>
        ))}
      </Menu>

      {/* Modal */}
      {isModalOpen && (
        <Overlay isVisible={isModalOpen} onClick={closeModal}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>×</CloseButton>
            <DishImage src={selectedDish.image} alt={selectedDish.name} />
            <TextContainer>
              <Title>{selectedDish.name}</Title>
              <Description>{selectedDish.description}</Description>
              <span> - Serve {selectedDish.serve} pessoa(s)</span>
              <ActionButton>Adicionar ao Carrinho - {selectedDish.price}</ActionButton>
              </TextContainer>
          </ModalContainer>
        </Overlay>
      )}
    </ProfileContainer>
  );
};

export default RestaurantProfile;