import React, { useEffect, useRef } from "react";

const GoogleMap = ({ placeId }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!window.google) {
      console.error("Google Maps JavaScript API not loaded.");
      return;
    }

    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 12.9715987, lng: 77.5945627 },
      zoom: 15,
    });

    const request = {
      placeId: placeId,
      fields: ["name", "formatted_address", "geometry"],
    };

    const service = new window.google.maps.places.PlacesService(map);
    service.getDetails(request, (place, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        new window.google.maps.Marker({
          map: map,
          position: place.geometry.location,
        });
        map.setCenter(place.geometry.location);
      }
    });
  }, [placeId]);

  return (
    <div
      ref={mapRef}
      style={{ width: "100%", height: "400px", marginTop: "20px" }}
    ></div>
  );
};

export default GoogleMap;
