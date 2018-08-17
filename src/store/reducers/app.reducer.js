const initState = {
  isBannerPage: false,
  selectedMenuIndex: 0,
  selectedTabIndex: 0,
  logs: {},
};


const app = (state = initState, action) => {
  switch (action.type) {
    case 'SELECT_MENU':
      return { ...state, selectedMenuIndex: action.menuIndex, selectedTabIndex: 0 }
    case 'SELECT_TAB':
      return { ...state, selectedTabIndex: action.tabIndex }
    case 'LOG':
      const newLog = {...state.log, ...action.logObject};
      return { ...state, logs: newLog }
    default:
      return { ...state }
  }
}

export default app;