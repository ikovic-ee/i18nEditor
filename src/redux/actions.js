import actionTypes from './actionTypes';

function updateKey(oldKey, newKey) {
  return {
    type: actionTypes.UPDATE_KEY,
    oldKey,
    newKey
  }
}

function addKey(key, index) {
  return {
    type: actionTypes.ADD_KEY,
    key
  }
}

function removeKey(key) {
  return {
    type: actionTypes.REMOVE_KEY,
    key
  }
}

export {
  updateKey,
  addKey,
  removeKey
};
