import React from 'react';
import {connect} from 'react-redux';
import {removeKey} from '../../../redux/actions';
import HigherOrderRow from './higherOrderRow';
import TextInput from './input/textInput';

const KeyRow = ({keyData, removeItem}) => {
  return (
    <span>
      <TextInput data={{item: keyData}}/>
      <span onClick={() => removeItem(keyData)}>X</span>
    </span>
  )
};

function mapDispatchToProps(dispatch) {
  return {
    removeItem: (item) => dispatch(removeKey(item))
  }
}

export default connect(null, mapDispatchToProps)(HigherOrderRow(KeyRow));
