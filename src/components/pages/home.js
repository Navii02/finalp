import React from 'react';
import {  } from 'react-router-dom';
import '../styles/Home.css'; // Import the CSS file


const HomePage = () => {
  

  const redirectToStudent = () => {
    window.location.href = '/login';
  };

  const redirectToOfficer = () => {
    window.location.href = '/admin';
  };

  return (
    /*<div className="bg">
    <div className="home-page">
      <h1>Welcome to the Office</h1>
      <h6>Who are you?</h6>
      <div className="button-container">
        <button className="btn" onClick={redirectToStudent}>Student</button>
        <button className="btn1" onClick={redirectToOfficer}>Officer</button>
      </div>
    </div>
    </div>*/
     <div className="office-home-page">
     <h1>Welcome to the Office</h1>
     <h6>Who are You?</h6>
     <div className="button-container">
       <div className="tabs">
         <button className="btn" onClick={redirectToStudent}>Student </button>
         <button className="btn1" onClick={redirectToOfficer}>Officer </button>
       </div>
     </div>
     </div>
  );
};

export default HomePage;
