// import axios from 'axios';

// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// const KEY = '1462d86bf4d4412c8c7244df37965ca7';
// export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

// export const searchMovies = async stringToSearch => {
//   const queryString = `search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${stringToSearch}`;
//   const { data: movies } = await axios.get(queryString);
//   return movies;
// };

// export const getMovieDetails = async movieId => {
//   const queryString = `movie/${movieId}$?api_key=${KEY}&language=en-US`;
//   const { data: movie } = await axios.get(queryString);
//   return movie;
// };

// export const fetchTrendingMovies = async () => {
//   const queryString = `trending/movie/day?api_key=${KEY}`;
//   const { data: movies } = await axios.get(queryString);
//   return movies;
// };

// export const getMovieCast = async movieId => {
//   const queryString = `movie/${movieId}/credits$?api_key=${KEY}&language=en-US`;
//   const { data } = await axios.get(queryString);
//   return data;
// };

// export const getReviews = async movieId => {
//   const queryString = `movie/${movieId}/reviews$?api_key=${KEY}&language=en-US`;
//   const { data } = await axios.get(queryString);
//   return data;
// };
// components/Home.

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Home = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchTrendingMovies = async () => {
//       try {
//         const response = await axios.get(
//           'https://api.themoviedb.org/3/trending/movie/day',
//           {
//             params: {
//               api_key: '1462d86bf4d4412c8c7244df37965ca7'
//             }
//           }
//         );
//         setMovies(response.data.results);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchTrendingMovies();
//   }, []);

//   return (
//     <div>
//       <h1>Trending Movies</h1>
//       <ul>
//         {movies.map(movie => (
//           <li key={movie.id}>{movie.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Home;
