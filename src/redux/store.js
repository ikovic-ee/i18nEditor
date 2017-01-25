import {combineReducers, createStore} from 'redux';
import namespacesReducer from './reducers/namespacesReducer';
import keysReducer from './reducers/keysReducer';

// INITIAL STATE - DELETE LATER
const initialState = {
  namespaces: [
    {
      id: 1,
      type: 'MODULE_TYPE',
      name: 'LOGIN',
      children: [2, 3, 4]
    },
    {
      id: 4,
      parent: 1,
      type: 'MODULE_TYPE',
      name: 'ALERT',
      children: [5]
    },
    {
      id: 6,
      type: 'MODULE_TYPE',
      name : 'OPTIN',
      children: [7]
    }
  ],
  keys: [
    {
      id: 2,
      type: 'KEY_TYPE',
      name: 'OK'
    },
    {
      id: 3,
      type: 'KEY_TYPE',
      name: 'CANCEL'
    },
    {
      id: 5,
      type: 'KEY_TYPE',
      name: 'ERROR'
    },
    {
      id: 7,
      type: 'KEY_TYPE',
      name: 'GO'
    }
  ]
};

const reducers = {
  namespaces: namespacesReducer,
  keys: keysReducer
};

const app = combineReducers(reducers);
const store = createStore(app, initialState);

export default store;
