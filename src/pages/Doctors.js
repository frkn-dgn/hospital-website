import React from "react";
import doctor1Image from "../assets/doctor1.jpg";
import doctor2Image from "../assets/doctor2.jpg";

const Doctors = () => {
  return (
    <div>
      <h1>Our Doctors</h1>
      <div>
        <img src={doctor1Image} alt="Dr. John Doe" className="doctor-img" />
        <p>Dr. John Doe - Cardiology</p>
      </div>
      <div>
        <img src={doctor2Image} alt="Dr. Jane Smith" className="doctor-img" />
        <p>Dr. Jane Smith - Pediatrics</p>
      </div>
    </div>
  );
};

export default Doctors;
