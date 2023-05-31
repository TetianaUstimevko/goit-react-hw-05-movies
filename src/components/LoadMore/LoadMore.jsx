import React from 'react';
import s from './LoadMore.module.css'

const LoadMore = ({ onClick }) => {
  return <button className={s.LoadMore} onClick={onClick}>Load More</button>;
};

export default LoadMore;