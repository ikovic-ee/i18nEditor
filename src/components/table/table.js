import React, {Component} from 'react';
import getUid from 'get-uid';
import ModuleRow from './row/moduleRow';
import KeyRow from './row/keyRow';
import constants from '../../constants/constants';

const Table = ({children, rows, language}) => {

  const preparedRows = [];
  let treeLevel = 0;

  function prepareRows(rows) {
    rows.forEach(row => {
      if (row.type === constants.MODULE_TYPE) {
        let newRow = (
          <ModuleRow
            key={`module_${getUid()}_${row.name}`}
            module={row}
            level={treeLevel}
          />
        );
        preparedRows.push(newRow);
        treeLevel++;
        prepareRows(row.keys);
      } else {
        let newRow = (
          <KeyRow
            key={`key_${getUid()}_${row.name}`}
            keyData={row}
            level={treeLevel}
          />
        );
        preparedRows.push(newRow);
      }
    });
    treeLevel--;
    return preparedRows;
  }

  return (
    <table>
      {children}
      <tbody>
      {prepareRows(rows)}
      </tbody>
    </table>
  );
};

export default Table;
