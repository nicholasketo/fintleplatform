// src/components/MyButtonComponent.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyButtonComponent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the "New Page" when the button is clicked
    navigate('/new-page');
  };

  return (
    <button onClick={handleClick}>
      Click here to start!
    </button>
  );
};

export default MyButtonComponent;
