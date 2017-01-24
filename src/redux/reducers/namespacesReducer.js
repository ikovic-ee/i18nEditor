import actionTypes from '../actionTypes';

const namespacesReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_NAMESPACE:
      return addNamespace(state, action);

    case actionTypes.UPDATE_NAMESPACE:
      return updateNamespace(state, action);

    default:
      return state;
  }
};

function addNamespace(namespaces, addAction) {
  const {namespace, index} = addAction;
  const parentArray = namespace.parent ? namespace.parent.keys : namespaces;

  if (index != null) {
    return [...parentArray.slice(0, index), namespace, ...parentArray.slice(index + 1)];
  } else {
    return [...parentArray, namespace];
  }
}

function updateNamespace(namespaces, updateAction) {
  const {namespace, parent, index} = updateAction;
  const parentArray = parent ? parent.keys : namespaces;

  // this should always return the root namespace
  return [...parentArray.slice(0, index + 1), namespace, ...parentArray.slice(index + 1)];
}

export default namespacesReducer;
