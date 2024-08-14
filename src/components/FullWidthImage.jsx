/* eslint-disable no-unused-vars */
import React from "react";

// Import image with correct file path and extension
import fullWidthImage from "../assets/images/event11.jpg"; // Replace with the correct image file path and extension

const FullWidthImage = () => {
  return (
    <div className="relative w-full">
      <img
        src={fullWidthImage}
        alt="Featured Football Event"
        className="w-full  object-cover" // Adjust the height as needed
      />
    </div>
  );
};

export default FullWidthImage;
