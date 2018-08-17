import React from 'react';
import { connect } from 'react-redux';

import barebone from '../../data/barebone';
import { selectMenu, log, scroll } from '../../store/actions';
import { Headers } from './';
import { Apps, Blogs, Designs, Education, Flicks, Food, Jobs, Skills, Social, Testimonial, Travel } from '../pages/';
import './_container.css';
import { Scrollbar } from '../components';

const Content = ({ selectedMenuIndex, selectedTabIndex, log, scroll, scrollTopMax, scrollTop }) => {
  const { getPage } = barebone;

  const getPageComponent = () => {
    switch (getPage(selectedMenuIndex, selectedTabIndex).header) {
      case 'APPS':
        return <Apps />;
      case 'BLOGS':
        return <Blogs />;
      case 'DESIGNS':
        return <Designs />;
      case 'EDUCATION':
        return <Education />;
      case 'FLICKS':
        return <Flicks />;
      case 'FOOD':
        return <Food />;
      case 'blogs':
        return <Jobs />;
      case 'SKILLS':
        return <Skills />;
      case 'SOCIAL COMPULSION':
        return <Social />;
      case 'TESTIMONIAL':
        return <Testimonial />;
      case 'DREAM':
        return <Travel />;
      default:
        return <Jobs />;
    }
  };

  return (
    <div className="content">
      <Headers />
      <div
        className="content__item"
        onScroll={({ target }) => {
          const scrollTop = target.scrollTop;
          const scrollTopMax = target.scrollTopMax;
          console.log(target)
          log({scrollTopMax, scrollTop})
          scroll(scrollTopMax, scrollTop);
        }}
      >
        <div className="content__item__scrollable">
          {getPageComponent()}
        </div>
      </div>
      <Scrollbar
        className="content__scrollbar"
        percentage={(!scrollTop && !scrollTopMax) ? 0 : (scrollTop / scrollTopMax * 100)}
      />
    </div>
  );
}

const matchStateToProps = state => ({
  selectedMenuIndex: state.app.selectedMenuIndex,
  selectedTabIndex: state.app.selectedTabIndex,
  scrollTopMax: state.app.scrollTopMax,
  scrollTop: state.app.scrollTop,
})

const matchDispatchToProps = dispatch => ({
  selectMenu: (index) => dispatch(selectMenu(index)),
  log: (logObject) => dispatch(log(logObject)),
  scroll: (height, top) => dispatch(scroll(height, top)),
})

export default connect(matchStateToProps, matchDispatchToProps)(Content);
