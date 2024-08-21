import React from 'react';


const Appointment = () => {
  return (
    <div className="appointment-container">
      <h1>Make an Appointment</h1>
      <form className="appointment-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="date">Preferred Date:</label>
        <input type="date" id="date" name="date" required />

        <label htmlFor="time">Preferred Time:</label>
        <input type="time" id="time" name="time" required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Appointment;
