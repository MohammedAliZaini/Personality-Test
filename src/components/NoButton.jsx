import React from 'react';
import '../components/styles/NoButton.css'


const NoButton = ({ onClick }) => {
  return (
    <button className='no-button' onClick={onClick}>No</button>
  );
};

export default NoButton;