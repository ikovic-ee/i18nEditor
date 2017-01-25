import actionTypes from '../actionTypes';

const keysReducer = (state = [], action) => {
  switch (action.type) {

    case actionTypes.UPDATE_KEY:
      return updateKey(state, action.oldKey, action.newKey);

    case actionTypes.ADD_KEY:
      return addKey(state, action.key, action.index);

    case actionTypes.REMOVE_KEY:
      return removeKey(state, action.key);

    default:
      return state;
  }
};

function updateKey(keys, oldKey, newKey) {
  let index = keys.indexOf(oldKey);
  return [...keys.slice(0, index), newKey, ...keys.slice(index + 1)];
}

function addKey(keys, key, index) {

}

function removeKey(keys, key) {
  let index = keys.indexOf(key);
  return [...keys.slice(0, index), ...keys.slice(index + 1)];
}

export default keysReducer;
