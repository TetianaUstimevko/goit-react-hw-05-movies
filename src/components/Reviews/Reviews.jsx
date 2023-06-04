import { useParams } from 'react-router-dom';
import { fetchReviews } from 'components/Api';
import { useState, useEffect } from 'react';
import { StyledReviewAuthorName, StyledReviewPost, StyledReviewItem, StyledReviewAboutMovie } from './Reviews.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    async function getReviewsDetails() {
      try {
        const detailsReviews = await fetchReviews(movieId);
        setReviews(detailsReviews.reviewsData);
      } catch (error) {
        console.log(error);
      }
    }

    getReviewsDetails();
  }, [movieId]);

  return (
    <div>
      {reviews !== null &&
        reviews.map(({ id, author, content }) => (
          <StyledReviewItem key={id}>
            <StyledReviewAuthorName>Author: {author}</StyledReviewAuthorName>
            <StyledReviewAboutMovie>About movie:</StyledReviewAboutMovie>
            <StyledReviewPost>{content}</StyledReviewPost>
          </StyledReviewItem>
        ))}
    </div>
  );
};
