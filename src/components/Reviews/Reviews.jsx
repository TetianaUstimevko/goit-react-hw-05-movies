import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import s from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const response = await api.getMovieReviews(movieId);
        setReviews(response.data.results);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      <h3 className={s.ReviewsTitle}>Reviews</h3>
      <ul className={s.ReviewsList}>
        {reviews.map((review) => (
          <li className={s.ReviewsItem} key={review.id}>{review.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
