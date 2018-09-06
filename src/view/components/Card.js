import React from 'react';
import './_components.css';

const Card = ({ className = '', lightShadow = false, children }) => (
  <div className={"card " + (lightShadow ? 'card--light-shadow ' : '') + className}>
    {children}
  </div>
);

export default Card;
