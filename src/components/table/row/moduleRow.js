import React, {Component} from 'react';

const ModuleRow = ({module, level}) => {
  return (
    <tr>
      <td>
        {module.name} {level}
      </td>
    </tr>
  )
};

export default ModuleRow;
