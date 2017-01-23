import React from 'react';
import HigherOrderRow from './higherOrderRow';
import TextInput from './input/textInput';

const KeyRow = ({keyData, level, parent, saveChange}) => {
  return (
    <TextInput value={keyData.name}
               saveChange={saveChange}
    />
  )
};

export default HigherOrderRow(KeyRow);
