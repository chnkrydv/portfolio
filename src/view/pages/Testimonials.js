import React from 'react';

import { Card, Avatar } from '../components';
import barebone from '../../data/barebone';
import './_pages.css';

const Testimonials = () => {
  const testimonials = barebone.getTestimonials();
  const my = barebone.getMyProfile();
  console.log(my)

  return (
    <div className="testimonials">
      {testimonials.map(testimonial => (
        <div className="testimonial">
          <Friend
            profilePic={testimonial.profilePic}
            name={testimonial.friend}
            designation={testimonial.designation}
            company={testimonial.company}
            linkedIn={testimonial.linkedIn}
          />
          <Card className="testimonial__card">
            <div className="testimonial__citation">,,</div>
            <div className="testimonial__text">{testimonial.testimonial}</div>
          </Card>
          <Me
            myProfilePic={my.profilePic}
            myLinkedIn={my.linkedIn}
            myReactions={testimonial.myReactions}
          />
        </div>
      ))}
    </div>
  );
}

const Friend = ({ profilePic, name, designation, company, linkedIn }) => (
  <div className="testimonial__friend">
    <Avatar
      size={80}
      src={profilePic}
      href={linkedIn}
    />
    <div className="testimonial__friend__name">{name}</div>
    <div className="testimonial__friend__designation">{designation}</div>
    <div className="testimonial__friend__company">{company}</div>
  </div>
);

const Me = ({ myProfilePic, myLinkedIn, myReactions }) => (
  <Card className="testimonial__my">
    <Avatar
      size={80}
      src={myProfilePic}
      href={myLinkedIn}
    />
    <div className="testimonial__my__reactions">
      {myReactions.map(rxnEmoji => (
        <Avatar
          size={20}
          src={rxnEmoji}
        />
      ))}
    </div>
  </Card>
);

export default Testimonials;
