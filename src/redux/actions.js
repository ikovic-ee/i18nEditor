import actionTypes from './actionTypes';

function addNamespace(namespace) {
  return {
    type: actionTypes.ADD_NAMESPACE,
    namespace
  }
}

function removeNamespace(namespace) {
  return {
    type: actionTypes.REMOVE_NAMESPACE,
    namespace
  }
}

function updateNamespace(namespace) {
  return {
    type: actionTypes.UPDATE_NAMESPACE,
    namespace
  }
}

export {
  addNamespace,
  removeNamespace,
  updateNamespace
};
