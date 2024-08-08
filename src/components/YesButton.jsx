import React from 'react';
import '../components/styles/YesButton.css'

const YesButton = ({ onClick }) => {
  return (
    <button className='yes-button' onClick={onClick}>Yes</button>
  );
};

export default YesButton;