import React from 'react';
import './Ship.css';

const Ship = ({ length, color, orientation, onClick }) => {
  const shipSegments = Array.from({ length }, (_, index) => (
    <div key={index} className="ship-segment"></div>
  ));

  return (
    <div className={`ship ${color} ${orientation}`} onClick={onClick}>
      {shipSegments}
    </div>
  );
};

export default Ship;
