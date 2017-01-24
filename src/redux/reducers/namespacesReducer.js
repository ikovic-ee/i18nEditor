import actionTypes from '../actionTypes';

const namespacesReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_NAMESPACE:
      return addNamespace(action.namespace, action.index);


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
