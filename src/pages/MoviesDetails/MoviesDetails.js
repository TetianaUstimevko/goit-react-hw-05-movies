import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await api.getMovieDetails(movieId);
        setMovie(response.data);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <Cast movieId={movieId} />
      <Reviews movieId={movieId} />
    </div>
  );
};

export default MovieDetails;