import React, {Component} from 'react';

const KeyRow = ({keyData, level, parent}) => {

  let leftPadding = 10 * level;

  return (
    <tr>
      <td style={{paddingLeft: leftPadding}}>
        {keyData.name}
      </td>
    </tr>
  )
};

export default KeyRow;
