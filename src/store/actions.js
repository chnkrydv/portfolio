const selectMenu = (menuIndex) => ({
  type: 'SELECT_MENU',
  menuIndex
})

const selectTab = (tabIndex) => ({
  type: 'SELECT_TAB',
  tabIndex
})

export { 
  selectMenu,
  selectTab
}