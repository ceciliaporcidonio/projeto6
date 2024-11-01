import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, Logo, NavLinks, NavLinkItem } from './Header.styles';
import logo from '../../images/logo.png';

const Header = () => (
  <HeaderContainer>
    <Logo src={logo} alt="Efood logo" />
    <NavLinks>
      <NavLinkItem>
        <Link to="/">Restaurantes</Link>
      </NavLinkItem>
      <NavLinkItem>
        <Link to="/cart">0 produto(s) no carrinho</Link>
      </NavLinkItem>
    </NavLinks>
  </HeaderContainer>
);

export default Header;
