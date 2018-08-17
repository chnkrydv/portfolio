import React from 'react';

import './_components.css';

const TabMenu = ({ className = '', tabs, selectedTabIndex, onTabSelect }) => {
  return (
    <div className={"tabs " + className}>
      {
        tabs.map((tab, key) => (
          <div
            className="tabs__tab"
            onClick={() => onTabSelect(key)}
          >
            {tab}
            <div className={`tabs__tab__bottom-bar ${selectedTabIndex === key ? '' : 'hidden'}`} />
          </div>
        ))
      }
    </div>
  );
}

export default TabMenu;
