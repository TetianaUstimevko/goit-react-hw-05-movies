import { useParams } from 'react-router-dom';
import { fetchCredits } from 'components/Api';
import { useState, useEffect } from 'react';

export const Cast = () => {
  const { movieId } = useParams();
  const [castDetails, setCastDetails] = useState([]);

  useEffect(() => {
    async function getCastDetails() {
      try {
        const detailsCast = await fetchCredits(movieId);
        console.log(detailsCast);
        setCastDetails(detailsCast.cast);
      } catch (error) {
        console.log(error);
      }
    }

    getCastDetails();
  }, [movieId]);

  return (
    <div>
      {castDetails.length > 0 &&
        castDetails.map(({ id, name, photo, character }) => (
          <ul key={id}>
            <img src={photo} alt={name} />
            <h1>{name}</h1>
            <h2>Character: {character}</h2>
          </ul>
        ))}
    </div>
  );
};
