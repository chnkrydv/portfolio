import React from 'react';

import './_components.css';

const Timeline = ({ className = '', isHorizontal, title, subtitle, ongoing, lastItemInfoClass }) => {
  return (
    <div className={`timeline ${isHorizontal ? 'timeline--horizontal' : ''} ${className}`}>
      <div className={`timeline__info ${lastItemInfoClass}`}>
        <div className="timeline__info__title">{title}</div>
        <div className="timeline__info__subtitle">{subtitle}</div>
      </div>
      <div className={`timeline__line ${isHorizontal ? 'timeline__line--horizontal' : ''}`}>
        <div className={`timeline__line__dot ${ongoing ? 'timeline__line__dot--ongoing' : ''}`} />
        <div />
        {
          !lastItemInfoClass
          ? <div className={`timeline__line__bar ${isHorizontal ? 'timeline__line__bar--horizontal' : ''}`} />
          : null
        }
      </div>
    </div>
  );
}

export default Timeline;
