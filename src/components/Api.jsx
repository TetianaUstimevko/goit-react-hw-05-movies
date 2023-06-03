import axios from 'axios';

const API_KEY = '1462d86bf4d4412c8c7244df37965ca7';
const URL = 'https://api.themoviedb.org/3/';
const BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    `${URL}trending/movie/day?api_key=${API_KEY}`
  );
  const movies = response.data.results.map(({ id, title }) => ({
    id,
    title,
  }));
  return { movies };
};

export const fetchDetailsMovies = async movieId => {
  const response = await axios.get(`${URL}movie/${movieId}?api_key=${API_KEY}`);
  const {
    id,
    title,
    poster_path: poster,
    overview,
    vote_average,
    genres,
    release_date,
  } = response.data;
  return {
    id,
    title,
    poster: BASE_URL + poster,
    overview,
    vote: vote_average.toFixed(1),
    genres: genres.map(genre => genre.name).join(', '),
    year: release_date.slice(0, 4),
  };
};

export const fetchCredits = async movieId => {
  const response = await axios.get(
    `${URL}movie/${movieId}/credits?api_key=${API_KEY}`
  );
  const cast = response.data.cast.map(
    ({ id, name, profile_path: photo, character }) => ({
      id,
      name,
      photo: photo ? BASE_URL + photo : null,
      character,
    })
  );
  return { cast };
};

export const fetchReviews = async movieId => {
  const response = await axios.get(
    `${URL}movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  const reviewsData = response.data.results.map(({ id, author, content }) => ({
    id,
    author,
    content,
  }));
  return { reviewsData };
};

export const fetchByQuery = async query => {
  const response = await axios.get(
    `${URL}search/movie?api_key=${API_KEY}&query=${query}`
  );
  const queryData = response.data.results.map(({ id, title }) => ({
    id,
    title,
  }));
  return { queryData };
};
