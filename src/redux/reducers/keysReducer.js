import actionTypes from '../actionTypes';

const keysReducer = (state = [], action) => {
  switch (action.type) {

    case actionTypes.UPDATE_KEY:
      return updateKey(state, action.oldKey, action.newKey);

    default:
      return state;
  }
};

function updateKey(keys, oldKey, newKey) {
  let keyIndex = keys.indexOf(oldKey);
  return [...keys.slice(0, keyIndex), newKey, ...keys.slice(keyIndex + 1)];
}

export default keysReducer;
