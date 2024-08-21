import React from "react";
import hospitalImage from '../assets/hospital.jpg';
const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <img src={hospitalImage} alt="Hospital" className="about-img" />
      <p className="about-description">
        Our hospital has been providing quality healthcare services since 1990.
        We are committed to offering the best medical care to our patients.
      </p>
    </div>
  );
};

export default About;
