import React, { useEffect, useState } from "react";

const GoogleReviews = ({ placeId }) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = () => {
      if (!window.google) {
        console.error("Google Maps JavaScript API not loaded.");
        return;
      }

      const map = new window.google.maps.Map(document.createElement("div"));
      const request = {
        placeId: placeId,
        fields: ["reviews"],
      };

      const service = new window.google.maps.places.PlacesService(map);
      service.getDetails(request, (place, status) => {
        if (
          status === window.google.maps.places.PlacesServiceStatus.OK &&
          place.reviews
        ) {
          setReviews(place.reviews);
        } else {
          console.error("Error fetching reviews:", status);
          setError("Error fetching reviews");
        }
      });
    };

    fetchReviews();
  }, [placeId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="reviews-container">
      <h2 className="review-heading" style={{ fontSize: 25 }}>
        Google Reviews
      </h2>
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
