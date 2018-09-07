import React from 'react';
import './_components.css';

const Avatar = ({ className = '', size = 50, src, href }) => (
  <a href={href} target="_blank">
    <img
      height={size}
      width={size}
      className={"avatar " + className}
      src={src}
    />
  </a>
);

export default Avatar;
