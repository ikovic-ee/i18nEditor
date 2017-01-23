import React, {Component} from 'react';

const ModuleRow = ({module, level, parent}) => {

  let leftPadding = 10 * level;

  return (
    <tr>
      <td style={{paddingLeft: leftPadding}}>
        {module.name}
      </td>
    </tr>
  )
};

export default ModuleRow;
