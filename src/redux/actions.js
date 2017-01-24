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

function updateNamespace(namespace, parent, index) {
  return {
    type: actionTypes.UPDATE_NAMESPACE,
    namespace,
    parent,
    index
  }
}

export {
  addNamespace,
  removeNamespace,
  updateNamespace
};
