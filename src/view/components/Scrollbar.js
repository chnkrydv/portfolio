import React from 'react';

import './_components.css';

const Scrollbar = ({ percentage = 20, className = '', hidden }) => {
  const scroll = { visibility: hidden ? 'hidden' : 'visible'};
  const bar = { height: percentage + '%' };

  return (
    <div style={scroll} className={'scroll ' + className}>
      <div style={bar} className="scroll__bar"></div>
    </div>
  );
}

export default Scrollbar;
