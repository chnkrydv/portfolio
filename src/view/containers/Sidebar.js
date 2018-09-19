import React, { Component } from 'react';
import { connect } from 'react-redux';

import barebone from '../../data/barebone';
import { selectMenu, log } from '../../store/actions';
import { Profile, Menu, Footer } from './';
import './_container.css';

const Sidebar = ({ selectedMenuIndex, selectMenu, logs, log }) => {
  const { getMenus } = barebone;

  return (
    <div onLoad={() => log({ test: 'testing logger'})} className="sidebar">
      <Profile />
      <Menu
        menus={getMenus(selectedMenuIndex)}
        selectedIndex={selectedMenuIndex}
        selectMenu={selectMenu}
      />
      <Footer />
    </div>
  );
}

const matchStateToProps = state => ({
  selectedMenuIndex: state.app.selectedMenuIndex,
  logs: state.app.logs,
})

const matchDispatchToProps = dispatch => ({
  selectMenu: (index) => dispatch(selectMenu(index)),
  log: (logObject) => dispatch(log(logObject)),
})

export default connect(matchStateToProps, matchDispatchToProps)(Sidebar);
