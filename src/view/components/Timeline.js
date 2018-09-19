import React from 'react';

import './_components.css';

const Timeline = ({ className = '', isHorizontal, title, subtitle, ongoing, lastItemInfoClass }) => {
  return (
    <div className={`timeline ${isHorizontal ? 'timeline--horizontal' : ''} ${className}`}>
      <div className={`timeline__info ${isHorizontal ? 'timeline__info--horizontal' : ''} ${lastItemInfoClass}`}>
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

const VerticalTimeline = () => {};

const HorizontalTimeline = () => {};

export default Timeline;
