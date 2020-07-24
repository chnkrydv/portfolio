import React from 'react';

import { Card, Timeline } from '../components/';
import page from '../../data/pageContents';

import './_pages.css';

const Jobs = () => {
  const jobs = page.jobsPageContent.jobs;
  const firstJob = jobs[jobs.length - 1];

  return (
    <div className="jobs">
      {[...jobs, firstJob].map((job, key) => (
        <div className="job">
          <Timeline
            isHorizontal={false}
            title={key === jobs.length ? firstJob.startDate : job.endDate}
            subtitle={key === jobs.length ? firstJob.location : job.location}
            ongoing={job.endDate === 'PRESENT DAY'}
            lastItemInfoClass={key === jobs.length ? 'jobs__last' : ''}
          />
          <div className="job__item">
            <div className="job__item__title" children={key === jobs.length ? firstJob.startDateStatus : job.endDateStatus} />
            {
              key === jobs.length
                ? null
                : (
                  <Card className="job__item__card" lightShadow={true}>
                    <div className="job__item__card__details">
                      <div className="card__company">
                        <div className="card__company__titles">
                          <div className="card__company__name">{job.company}</div>
                          <div className="card__company__designation">{job.designation}</div>
                        </div>
                        <img className="card__company__logo" src={job.logo} />
                      </div>
                      <div className="card__details__achievements">
                        {job.achievements.map(achievement => (
                          <div className="achievements__achievement">{achievement}</div>
                        ))}
                      </div>
                      <div className="card__details__works">
                        {job.works.map(work => (
                          <div className="works_work">
                            <div className="works_work__app">{work.app}</div>
                            <div className="works_work__role">{work.role}</div>
                            <div className="works_work__description">{work.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                )
            }
          </div>
        </div>
      ))}
    </div>
  );
}

export default Jobs;
