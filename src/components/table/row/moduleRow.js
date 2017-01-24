import React from 'react';
import HigherOrderRow from './higherOrderRow';
import TextInput from './input/textInput';

const ModuleRow = ({module, level, parent, saveChange}) => {
  return (
    <TextInput data={{item: module, parent}}/>
  )
};

export default HigherOrderRow(ModuleRow);
