import React from 'react';
import HigherOrderRow from './higherOrderRow';
import TextInput from './input/textInput';

const KeyRow = ({keyData, level, parent, saveChange}) => {
  return (
    <TextInput data={{item: keyData, parent}}/>
  )
};

export default HigherOrderRow(KeyRow);
