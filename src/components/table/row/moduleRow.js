import React, {Component} from 'react';

const ModuleRow = ({data}) => {
  return (
    <tr>
      <td>
        {JSON.stringify(data)}
      </td>
    </tr>
  )
};

export default ModuleRow;
