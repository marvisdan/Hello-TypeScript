import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import Hello from './containers/Hello';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { IStoreState } from './types/index';
import { EnthusiasmAction } from './actions';

/* creatore need State type, action type and  any properties */
const store = createStore<IStoreState, EnthusiasmAction, any, any>(enthusiasm /* add some reducers*/);
ReactDOM.render(
  <Provider store={store}>
    <Hello  />
  </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
