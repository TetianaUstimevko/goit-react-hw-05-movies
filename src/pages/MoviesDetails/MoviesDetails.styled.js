import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0;
`;

export const StyledImgContainer = styled.div`
  margin-right: 10px;
`;

export const StyledDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledFilmName = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
`;

export const StyledUserRating = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

export const StyledListMoviesDetails = styled.ul`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  color: #1261e0;
 transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus-visible {
    color: #eb1b0c;
    text-decoration: underline;
  }
`;