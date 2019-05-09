
import React from 'react';
import './style.css';

function GoTCard({ className, id, image, name, handler }) {  
  return (
    <img
      className={className}
      src={image}
      alt={name}
      onClick={() => handler(id)}
    >
    </img>
  );
}

export default GoTCard;