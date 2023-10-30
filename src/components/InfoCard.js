// InfoCard.js
import React from 'react';
import '../App.css';

function InfoCard({ image, logo, text }) {
  return (
    <div className="InfoCard">
      <div className='logo'>  <img src={logo}  alt={logo} /></div>      
      <p>{text}</p>
      <div className='image'> <img src={image} alt={image} /></div>
     
    </div>
  );
}

export default InfoCard;
