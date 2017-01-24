import actionTypes from './actionTypes';

function addNamespace(namespace, index) {
  return {
    type: actionTypes.ADD_NAMESPACE,
    namespace,
    index
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
