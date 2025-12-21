import { useEffect } from "react";

const ReviewsWidget = () => {
  useEffect(() => {
    // Load the Elfsight script dynamically
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script on component unmount
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white mb-8 text-center">
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

export default ReviewsWidget;
