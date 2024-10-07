import React, { useEffect } from "react";
import "../styles/Styles.css";

const GoogleReviews = () => {
  useEffect(() => {
    // Load the Elfsight script dynamically
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="review-container">
      <div>
        <h2 className="review-heading" style={{ fontSize: 25 }}>
          Google Reviews
        </h2>
        <div
          className="elfsight-app-2e277bf3-f898-42c4-8652-bf98f81a80c8"
          data-elfsight-app-lazy
        ></div>
      </div>
    </div>
  );
};

export default GoogleReviews;
