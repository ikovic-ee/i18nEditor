import React, {Component} from 'react';

const KeyRow = ({keyData, level}) => {
  return (
    <tr>
      <td>
        {keyData.name} {level}
      </td>
    </tr>
  )
};

export default KeyRow;
