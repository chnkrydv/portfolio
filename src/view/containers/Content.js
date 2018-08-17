import React from 'react';
import { connect } from 'react-redux';

import barebone from '../../data/barebone';
import { selectMenu } from '../../store/actions';
import { Headers } from './';
import { Apps, Blogs, Designs, Education, Flicks, Food, Jobs, Skills, Social, Testimonial, Travel } from '../pages/';
import './_container.css';
import { Scrollbar } from '../components';

const Content = ({ selectedMenuIndex, selectedTabIndex }) => {
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
      <div className="content__item">
        <div className="content__item__scrollable">
          {getPageComponent()}
        </div>
      </div>
      <Scrollbar
        className="content__scrollbar"
      />
    </div>
  );
}

const matchStateToProps = state => ({
  selectedMenuIndex: state.app.selectedMenuIndex,
  selectedTabIndex: state.app.selectedTabIndex,
})

const matchDispatchToProps = dispatch => ({
  selectMenu: (index) => dispatch(selectMenu(index)),
})

export default connect(matchStateToProps, matchDispatchToProps)(Content);
