import React, { Fragment } from 'react';
import './_container.css';

const Profile = () =>  {
  return (
    <Fragment>
      <img
        className="profile__image"
        src="images/people/me.jpg"
      />
      <div className="profile__details">
        <div className="profile__details__name">
          CHANDAN KUMAR
        </div>
        <div className="profile__details__expertise">
          designer <div className="profile__details__expertise__dot" /> developer
        </div>
      </div>
    </Fragment>
  );
}

export default Profile;
