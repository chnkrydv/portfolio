import { combineReducers } from 'redux';

import app from './app.reducer';
import area from './area.reducer';

export default combineReducers({
  app,
  area
})
