import React from 'react';
import './LogoSpinner.css';
import spinner from "../assets/spinner.webp"

const LogoSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner">
        <img src={spinner} alt="Logo" className="spinner-logo" />
      </div>
    </div>
  );
};

export default LogoSpinner;
