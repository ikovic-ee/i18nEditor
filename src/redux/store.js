import {combineReducers, createStore} from 'redux';
import namespacesReducer from './reducers/namespacesReducer';

const reducers = {
  namespaces: namespacesReducer
};

const app = combineReducers(reducers);
const store = createStore(app);

export default store;
