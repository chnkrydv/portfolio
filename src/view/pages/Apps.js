import React from 'react';

import pageContents from '../../data/pageContents';
import './_pages.css';

const Apps = () =>  {
  return (
    <div className="apps">
      <img size={100} src={pageContents.gigsContent.noGigErrorImage}/>
      <div className="apps__big-font">Under Maintenance</div>
      <div className="apps__small-font">Coming Soon..</div>
    </div>
  );
}

export default Apps;
