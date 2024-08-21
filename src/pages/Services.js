import React from 'react';
import service1Image from '../assets/service1.jpg'; // Servis görsellerini buraya ekleyin
import service2Image from '../assets/service2.jpg';
import service3Image from '../assets/service3.jpg';


const Services = () => {
  return (
    <div className="services-container">
      <div className="service-card">
        <img src={service1Image} alt="Service 1" />
        <h3>Emergency Care</h3>
        <p>24/7 emergency care services with dedicated medical professionals.</p>
      </div>
      <div className="service-card">
        <img src={service2Image} alt="Service 2" />
        <h3>Cardiology</h3>
        <p>Comprehensive cardiology services including diagnosis and treatment of heart conditions.</p>
      </div>
      <div className="service-card">
        <img src={service3Image} alt="Service 3" />
        <h3>Pediatrics</h3>
        <p>Expert care for children with a focus on their overall health and development.</p>
      </div>
    </div>
  );
};

export default Services;