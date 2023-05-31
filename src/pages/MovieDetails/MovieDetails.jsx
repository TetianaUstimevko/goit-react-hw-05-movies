import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import s from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
          params: {
            api_key: '1462d86bf4d4412c8c7244df37965ca7',
          },
        });
        setMovieDetails(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!movieDetails) {
    return <div>Movie not found.</div>;
  }

  return (
    <div className={s.container}>
      <h1>{movieDetails.title}</h1>
      <p>{movieDetails.overview}</p>
      {/* Additional movie details */}
    </div>
  );
};

export default MovieDetails;
