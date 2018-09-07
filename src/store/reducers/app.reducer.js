const initState = {
  isBannerPage: false,
  selectedMenuIndex: 5,
  selectedTabIndex: 0,
  scrollTopMax: 0,
  scrollTop: 0,
  logs: {},
};


const app = (state = initState, action) => {
  switch (action.type) {
    case 'SELECT_MENU':
      return { ...state, selectedMenuIndex: action.menuIndex, selectedTabIndex: 0, scrollTopMax: 0, scrollTop: 0  }
    case 'SELECT_TAB':
      return { ...state, selectedTabIndex: action.tabIndex, scrollTopMax: 0, scrollTop: 0 }
    case 'LOG':
      const newLog = { ...state.log, ...action.logObject };
      return { ...state, logs: newLog }
    case 'SCROLL':
      return { ...state, scrollTopMax: action.height, scrollTop: action.top }
    default:
      return { ...state }
  }
}

export default app;