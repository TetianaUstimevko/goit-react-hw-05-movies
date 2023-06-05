import React from 'react';
import { StyledLink } from './MovieList.styled';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <StyledLink to={`/movies/${id}`}>{title}</StyledLink>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
