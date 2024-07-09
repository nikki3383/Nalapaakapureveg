import React from "react";
import GoogleReviews from "./GoogleReviews";
import GoogleMap from "./Map";
import GooglePhotos from "./GooglePhotos";
import "../styles/Styles.css";

const Home = () => {
  const placeId = "ChIJS3FojnyRsDsRZgbhjaM2DiY"; // Replace with your actual Google Place ID

  return (
    <div>
      <h1 className="home-header1">NALAPAAKA</h1>
      <h2 className="home-header2"> Pure Veg</h2>
      <p className="home-content">
        At NALAPAAKA, we believe that great food brings people together, and we
        are committed to creating memorable dining experiences for our guests.
        Whether you are a vegetarian or simply looking to enjoy a healthy and
        delicious meal, we have something special for everyone.
      </p>
      <div className="reviews-continer">
        <GoogleReviews placeId={placeId} />{" "}
        {/* Add the GoogleReviews component here */}
      </div>

      <div className="photos-container">
        <GooglePhotos placeId={placeId} />
      </div>

      <p style={({ color: "white" }, { fontSize: "10px" })}>
        Note:( photos generated are directly from googlemaps)
      </p>
      <h1>PLEASE VISIT US AT</h1>
      <div className="map-container">
        <GoogleMap placeId={placeId} />
      </div>
    </div>
  );
};

export default Home;
