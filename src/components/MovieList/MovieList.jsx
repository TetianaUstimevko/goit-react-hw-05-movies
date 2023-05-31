import React from 'react';
import { Link } from 'react-router-dom';
import s from './MovieList.module.css';

const MovieList = ({ movies }) => {
  return (
    <ul className={s.MovieList}>
      {movies.map((movie) => (
        <li className={s.MovieListItem} key={movie.id}>
          <Link to={`/movies/${movie.id}`} className={s.MovieListLink}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
