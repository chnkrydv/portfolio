import React, { Component } from 'react';
import { connect } from 'react-redux';

import barebone from '../../data/barebone';
import { selectMenu } from '../../store/actions';
import { Profile, Menu, Footer } from './';
import './_container.css';

const Sidebar = ({ selectedMenuIndex, selectMenu }) => {
  const { getMenus } = barebone;

  return (
    <div className="sidebar">
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
})

const matchDispatchToProps = dispatch => ({
  selectMenu: (index) => dispatch(selectMenu(index)),
})

export default connect(matchStateToProps, matchDispatchToProps)(Sidebar);
