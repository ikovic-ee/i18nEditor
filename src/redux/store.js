import {combineReducers, createStore} from 'redux';
import namespacesReducer from './reducers/namespacesReducer';

// INITIAL STATE - DELETE LATER
const initialState = {
  namespaces: [
    {
      type: 'MODULE_TYPE',
      name: 'LOGIN',
      keys: [
        {
          type: 'KEY_TYPE',
          name: 'OK'
        },
        {
          type: 'KEY_TYPE',
          name: 'CANCEL'
        },
        {
          type: 'MODULE_TYPE',
          name: 'ALERT',
          keys: [
            {
              type: 'KEY_TYPE',
              name: 'ERROR'
            }
          ]
        }
      ]
    },
    {
      type: 'MODULE_TYPE',
      name: 'LOGIN',
      keys: [
        {
          type: 'KEY_TYPE',
          name: 'OK'
        },
        {
          type: 'KEY_TYPE',
          name: 'CANCEL'
        },
        {
          type: 'MODULE_TYPE',
          name: 'ALERT',
          keys: [
            {
              type: 'KEY_TYPE',
              name: 'ERROR'
            }
          ]
        }
      ]
    }
  ]
};

const reducers = {
  namespaces: namespacesReducer
};

const app = combineReducers(reducers);
const store = createStore(app, initialState);

export default store;
