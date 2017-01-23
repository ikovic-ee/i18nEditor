import React, {Component} from 'react';
import ModuleRow from './row/moduleRow';

const Table = ({children, rows}) => {

  function prepareRows() {
    // return correct row object
    return rows.map((row, index) => {
      return (<ModuleRow key={index} data={row}/>)
    });
  }

  return (
    <table>
      {children}
      <tbody>
        {prepareRows()}
      </tbody>
    </table>
  );
};

export default Table;
