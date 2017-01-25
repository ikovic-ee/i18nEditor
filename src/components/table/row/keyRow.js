import React from 'react';
import {connect} from 'react-redux';
import {addKey, removeKey} from '../../../redux/actions';
import HigherOrderRow from './higherOrderRow';
import TextInput from './input/textInput';

const KeyRow = ({keyData, addItem, removeItem}) => {
  return (
    <span>
      <TextInput data={{item: keyData}}/>
      <span onClick={() => addItem(keyData)}> + </span>
      <span onClick={() => removeItem(keyData)}> - </span>
    </span>
  )
};

function mapDispatchToProps(dispatch) {
  return {
    addItem: (previousItem) => dispatch(addKey(previousItem)),
    removeItem: item => dispatch(removeKey(item))
  }
}

export default connect(null, mapDispatchToProps)(HigherOrderRow(KeyRow));
