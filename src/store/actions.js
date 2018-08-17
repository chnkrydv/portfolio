const selectMenu = (menuIndex) => ({
  type: 'SELECT_MENU',
  menuIndex
})

const selectTab = (tabIndex) => ({
  type: 'SELECT_TAB',
  tabIndex
})

const log = logObject => ({
  type: 'LOG',
  logObject
})

export { 
  selectMenu,
  selectTab,
  log
}