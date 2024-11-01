import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #FFF8F2;
`;

export const Logo = styled.img`
  height: 50px;
`;

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavLinkItem = styled.div`
  margin-left: 20px;
  a {
    color: #E66767;
    font-weight: bold;
    text-decoration: none;
    font-size: 1rem;
  }
`;
