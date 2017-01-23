import React, {Component} from 'react';
import Table from './table/table';

export default class Root extends Component {
  constructor() {
    super();

    this.state = {
      stuff: 'stuff'
    };
  }

  render() {
    return (
      <div>
        {this.state.stuff}
        <Table>
          <thead>
            <tr>
              <td>Modules & Keys</td>
            </tr>
          </thead>
        </Table>
      </div>
    );
  }
}
