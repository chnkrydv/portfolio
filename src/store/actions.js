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

const scroll = (height, top) => ({
  type: 'SCROLL',
  height,
  top
})

export { 
  selectMenu,
  selectTab,
  log,
  scroll
}