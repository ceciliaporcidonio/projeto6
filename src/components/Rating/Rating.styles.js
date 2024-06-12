import styled from 'styled-components';

export const StarContainer = styled.div`
  display: flex;
  width: 55px;
height: 21px;
top: 665px;
left: 580px;
gap: 0px;
opacity: 0px;

`;

export const Star = styled.span`
  color: ${({ empty }) => (empty ? '#ccc' : '#FFD700')};
  font-size: 20px;
  margin-right: 2px;
`;
