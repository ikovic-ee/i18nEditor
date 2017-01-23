import React, {Component} from 'react';
import Table from './table/table';

export default class Root extends Component {
  constructor() {
    super();

    this.state = {
      rows: [
        {test: 'test'},
        {ppp: 'ppp'}
      ]
    };
  }

  render() {
    return (
      <div>
        <Table rows={this.state.rows}>
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
