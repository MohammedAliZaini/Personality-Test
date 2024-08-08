import React from 'react';
import "../components/styles/BeginButton.css"

const BeginButton = ({ onClick }) => {
  return (
    <button className='begin-button' onClick={onClick}>Begin</button>
  );
};

export default BeginButton;