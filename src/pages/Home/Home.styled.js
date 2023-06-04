import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledHomeHeading = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
  color: #124ece;
`;

export const StyledFilmList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  margin-bottom: 7px;
  text-decoration: none;
  color: #1261e0;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus-visible {
    color: #eb2b2c;
    scale: 1.1;
  }
`;