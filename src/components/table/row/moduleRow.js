import React from 'react';
import HigherOrderRow from './higherOrderRow';
import TextInput from './input/textInput';

const ModuleRow = ({module, level, parent, saveChange}) => {
  return (
    <TextInput value={module.name}
               saveChange={saveChange}
    />
  )
};

export default HigherOrderRow(ModuleRow);
