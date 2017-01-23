import React, {Component} from 'react';

const Table = ({children, rows}) => {

  function prepareRows() {
    // return correct row object
    return [];
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
