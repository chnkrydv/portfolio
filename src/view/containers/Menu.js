import React from 'react';
import PropTypes from 'prop-types';
import './_container.css';

const Menu = ({
  menus,
  selectedIndex,
  selectMenu
}) =>  {
  console.log('selectedIndex: ', selectedIndex);
  return (
    <div className="menu">
      {menus.map((menu, key) => (
        <div
          className={`menu__title ${selectedIndex === key && 'menu__title--selected'}`}
          onClick={() => selectMenu(key)}
        >
          {menu}
          {
            selectedIndex === key
            ? <div className="menu__title__triangle"/>
            : null
          }
        </div>
      ))}
    </div>
  );
}

Menu.propTypes = {
  menus: PropTypes.arrayOf(PropTypes.object),
  selectedIndex: PropTypes.number,
  selectMenu: PropTypes.func
};

export default Menu;
