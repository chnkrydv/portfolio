import React from 'react';

import { Avatar } from '../components';
import page from '../../data/pageContents';
import './_pages.css';

const Social = () => {
  const sites = page.socialContent.sites;

  return (
    <div className="social">
      {sites.map( site => <Icon imgSrc={site.imgSrc} link={site.link} />)}
      <div className="social__message">
        You can contact me here.
      </div>
    </div>
  );
}

const Icon = ({ imgSrc, link }) => (
  <Avatar
    className="social__logo"
    size={120}
    src={imgSrc}
    href={link}
  />
);

export default Social;
