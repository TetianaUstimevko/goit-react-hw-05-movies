import { useParams } from 'react-router-dom';
import { fetchReviews } from 'components/Api';
import { useState, useEffect } from 'react';

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
          <ul key={id}>
            <li>Author: {author}</li>
            <li>About movie:</li>
            <p>{content}</p>
          </ul>
        ))}
    </div>
  );
};
