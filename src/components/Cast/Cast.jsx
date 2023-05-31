import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import s from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const response = await api.getMovieCredits(movieId);
        setCast(response.data.cast);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <div>
      <h3 className={s.Cast}>Cast</h3>
      <ul className={s.actor-list}>
        {cast.map((actor) => (
          <li className={s.actor-item} key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;