import React from 'react';
import styled from 'styled-components';

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: #f39c12;
  margin-bottom: 10px;
  width: 55px;
height: 21px;
top: 665px;
left: 580px;
gap: 0px;
opacity: 0px;

`;

const Rating = ({ rating }) => (
  <RatingWrapper>
    {rating} <span>⭐</span>
  </RatingWrapper>
);

export default Rating;
