import actionTypes from './actionTypes';

function updateKey(oldKey, newKey) {
  return {
    type: actionTypes.UPDATE_KEY,
    oldKey,
    newKey
  }
}

function addKey(previousKey = null) {
  return {
    type: actionTypes.ADD_KEY,
    previousKey
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
