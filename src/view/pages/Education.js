import React from 'react';

import { Timeline, Card } from '../components/';
import page from '../../data/pageContents';

import './_pages.css';

const Education = () => {
  const schools = page.educationContent.schools;

  return (
    <div className="education">
      <div className="education__timeline">
        <Timeline
          title="2014"
          size={150}
          isHorizontal={true}
        />
        <Timeline
          title="2010"
          size={150}
          isHorizontal={true}
        />
        <Timeline
          title="2007"
          size={150}
          isHorizontal={true}
        />
        <Timeline
          title="2003"
          size={150}
          isHorizontal={true}
          lastItemInfoClass="iljsdc"
        />
      </div>
      <div className="education__content">
        {schools.map(school => (
          <School
            {...school}
          />
        ))}
      </div>
    </div>
  );
}

const School = ({ name, degree, score, subject, achievements }) => (
  <div>
    <Card className="education__school">
      <div className="school__name">{name}</div>
      <div className="school__score">{score}</div>
      <div className="school__content">
        <div className="school__content__degree">{degree}</div>
        <div className="school__content__subject">{subject}</div>
        {achievements.map(text => (
          <Paper text={text} />
        ))}
      </div>
    </Card>
  </div>
);

const Paper = ({ text }) => {
  const phrases = text.split(':');
  const hasHeading = phrases.length > 1;

  return (
    <div className="school__content__achievement">
      {
        hasHeading
        ? (<span>{phrases[0]}: <i>{phrases[1]}</i></span>)
        : text
      }
    </div>
  );
};

export default Education;
