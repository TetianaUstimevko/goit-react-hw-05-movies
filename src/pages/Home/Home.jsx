import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'components/Api';

import { StyledHomeHeading, StyledFilmList, StyledLink } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const trandingMovies = await fetchTrendingMovies();

        setMovies(trandingMovies.movies);
      } catch (error) {
        console.log(error);
      }
    }

    getMovies();
  }, []);

  return (
    <div>
      <StyledHomeHeading>Tranding today</StyledHomeHeading>

      {movies.length > 0 &&
        movies.map(({ id, title }) => (
          <StyledFilmList key={id}>
            <li>
              <StyledLink to={`/movies/${id}`}> {title} </StyledLink>
            </li>
          </StyledFilmList>
        ))}
    </div>
  );
};

export default Home;
