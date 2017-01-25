import React from 'react';
import HigherOrderRow from './higherOrderRow';
import TextInput from './input/textInput';

const KeyRow = ({keyData}) => {
  return (
    <TextInput data={{item: keyData}}/>
  )
};

export default HigherOrderRow(KeyRow);
