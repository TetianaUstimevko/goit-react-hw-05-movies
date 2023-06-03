import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'components/Api';
import { Link } from 'react-router-dom';

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
      <h3>Tranding today</h3>

      {movies.length > 0 &&
        movies.map(({ id, title }) => (
          <ul key={id}>
            <li>
              <Link to={`/movies/${id}`}> {title} </Link>
            </li>
          </ul>
        ))}
    </div>
  );
};

export default Home;
