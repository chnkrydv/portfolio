import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

import './app.css';
import rootReducer from '../store/reducers/';
import { Sidebar, Content } from './containers/';

const store = createStore(rootReducer, applyMiddleware());

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Sidebar />
      <Content />
    </div>
  </Provider>
)

export default App;
