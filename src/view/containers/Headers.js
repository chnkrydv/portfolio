import React from 'react';
import { connect } from 'react-redux';

import barebone from '../../data/barebone';
import { selectTab } from '../../store/actions';
import { TabMenu } from '../components/';
import './_container.css';

const Headers = ({ className, selectedMenuIndex, selectedTabIndex, selectTab }) => {
  const { getTabs } = barebone;
  return (
    <TabMenu
      className={className}
      tabs={getTabs(selectedMenuIndex)}
      selectedTabIndex={selectedTabIndex}
      onTabSelect={selectTab}
    />
  );
}

const matchStateToProps = state => ({
  selectedMenuIndex: state.app.selectedMenuIndex,
  selectedTabIndex: state.app.selectedTabIndex,
})

const matchDispatchToProps = dispatch => ({
  selectTab: index => dispatch(selectTab(index))
})

export default connect(matchStateToProps, matchDispatchToProps)(Headers);
