import React, { useEffect, useState } from "react";

const GooglePhotos = ({ placeId }) => {
  const [photos, setPhotos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!window.google) {
      console.error("Google Maps JavaScript API not loaded.");
      return;
    }

    const map = new window.google.maps.Map(document.createElement("div"));
    const request = {
      placeId: placeId,
      fields: ["photos"],
    };

    const service = new window.google.maps.places.PlacesService(map);
    service.getDetails(request, (place, status) => {
      if (
        status === window.google.maps.places.PlacesServiceStatus.OK &&
        place.photos
      ) {
        // Fetch up to 10 photos
        const maxPhotos = 20;
        const photoUrls = place.photos
          .slice(0, maxPhotos)
          .map((photo) => photo.getUrl({ maxWidth: 400, maxHeight: 300 }));
        setPhotos(photoUrls);
      } else {
        console.error("No photos found or error fetching details:", status);
      }
    });
  }, [placeId]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="photos-container">
      {photos.length > 0 ? (
        <div className="photo-viewer">
          <button onClick={handlePrevClick} className="arrow-button prev-arrow">
            &lt;
          </button>
          <img
            src={photos[currentIndex]}
            alt={`pic of the restaurant ${currentIndex + 1}`}
            className="place-photo"
          />
          <button onClick={handleNextClick} className="arrow-button next-arrow">
            &gt;
          </button>
        </div>
      ) : (
        <p>No photos available</p>
      )}
    </div>
  );
};

export default GooglePhotos;
