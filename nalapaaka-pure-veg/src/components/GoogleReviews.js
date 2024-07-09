import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GoogleReviews = ({ placeId }) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/place/details/json`,
          {
            params: {
              place_id: placeId,
              key: "AIzaSyCCquOiELyhfclO0OnN2lMi2pNtZvh2ito",
              fields: 'reviews'
            }
          }
        );
        console.log('Google Reviews API Response:', response.data);
        setReviews(response.data.result.reviews);
      } catch (err) {
        console.error('Google Reviews API Error:', err);
        setError(err.message);
      }
    };
  
    fetchReviews();
  }, [placeId]);
  

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="reviews-container">
      <h2 className='review-heading'>Google Reviews</h2>
      <div className="reviews-list">
        {reviews.map((review, index) => (
          <div className="review" key={index}>
            <p>Author: {review.author_name}</p>
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default GoogleReviews;
