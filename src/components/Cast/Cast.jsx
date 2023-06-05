import { useParams } from 'react-router-dom';
import { fetchCredits } from 'components/Api';
import { useState, useEffect } from 'react';
import {
  StyledActorContainer,
  StyledActorName,
  StyledActorCharacter,
  NoCast
} from './Cast.styled';

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
    <StyledActorContainer>
      {castDetails.length > 0 ? (
        castDetails.map(({ id, name, photo, character }) => (
          <ul key={id}>
            <img src={photo} alt={name} />
            <StyledActorName>{name}</StyledActorName>
            <StyledActorCharacter>Character: {character}</StyledActorCharacter>
          </ul>
        ))
      ) : (
        <NoCast>There are not information about movie cast</NoCast>
      )}
    </StyledActorContainer>
  );
};
