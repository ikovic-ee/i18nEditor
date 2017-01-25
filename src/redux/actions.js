import actionTypes from './actionTypes';

function updateKey(oldKey, newKey) {
  return {
    type: actionTypes.UPDATE_KEY,
    oldKey,
    newKey
  }
}

export {
  updateKey
};
