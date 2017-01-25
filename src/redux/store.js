import {combineReducers, createStore} from 'redux';
import keysReducer from './reducers/keysReducer';

// INITIAL STATE - DELETE LATER
const initialState = {
  keys: [
    {
      type: 'KEY_TYPE',
      value: 'LOGIN_OK_BTN'
    },
    {
      type: 'KEY_TYPE',
      value: 'LOGIN_CANCEL_BTN'
    }
  ]
};

const reducers = {
  keys: keysReducer
};

const app = combineReducers(reducers);
const store = createStore(app, initialState);

export default store;
