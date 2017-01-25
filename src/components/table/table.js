import React, {Component} from 'react';
import KeyRow from './row/keyRow';
import getUid from 'get-uid';
import constants from '../../constants/constants';

const Table = ({title, keys, language}) => {

  function prepareRows(rows) {
    let preparedRows = [];
    rows.forEach(row => {
      if (row.type === constants.KEY_TYPE) {
        let newRow = (
          <KeyRow
            key={`key_${getUid()}`}
            keyData={row}
          />
        );
        preparedRows.push(newRow);
      } else {
        // TODO language thingy
      }
    });
    return preparedRows;
  }

  return (
    <table className="translation-table">
      <thead>
      <tr>
        <th>
          {title}
        </th>
      </tr>
      </thead>
      <tbody>
      {prepareRows(keys)}
      </tbody>
    </table>
  );
};

export default Table;
