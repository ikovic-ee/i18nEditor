import React, {Component} from 'react';
import ModuleRow from './row/moduleRow';
import KeyRow from './row/keyRow';
import constants from '../../constants/constants';

const Table = ({title, namespaces, keys, language}) => {

  const preparedRows = [];
  let treeLevel = 0;

  function getChildren(ids) {
    let allItems = [...keys, ...namespaces];
    return allItems.filter(row => ids.find(id => id === row.id));
  }

  function prepareRows(rows, parent = null) {
    rows.forEach(row => {
      if (row.type === constants.MODULE_TYPE && (!parent && !row.parent || (parent && row.parent))) {
        let newRow = (
          <ModuleRow
            key={`module_${row.id}_${row.name}`}
            module={row}
            level={treeLevel}
            parent={parent}
          />
        );
        preparedRows.push(newRow);
        parent = row;
        treeLevel++;
        let children = getChildren(row.children);
        prepareRows(children, parent);
      } else {
        let newRow = (
          <KeyRow
            key={`key_${row.id}_${row.name}`}
            keyData={row}
            level={treeLevel}
            parent={parent}
          />
        );
        preparedRows.push(newRow);
      }
    });
    treeLevel--;
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
      {prepareRows(namespaces)}
      </tbody>
    </table>
  );
};

export default Table;
