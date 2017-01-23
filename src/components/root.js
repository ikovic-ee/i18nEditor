import React, {Component} from 'react';
import Table from './table/table';

export default class Root extends Component {
  constructor() {
    super();

    this.state = {
      rows: [
        {
          type: 'MODULE_TYPE',
          name: 'LOGIN',
          keys: [
            {
              type: 'KEY_TYPE',
              name: 'OK'
            },
            {
              type: 'KEY_TYPE',
              name: 'CANCEL'
            },
            {
              type: 'MODULE_TYPE',
              name: 'ALERT',
              keys: [
                {
                  type: 'KEY_TYPE',
                  name: 'ERROR'
                }
              ]
            }
          ]
        },
        {
          type: 'MODULE_TYPE',
          name: 'LOGIN',
          keys: [
            {
              type: 'KEY_TYPE',
              name: 'OK'
            },
            {
              type: 'KEY_TYPE',
              name: 'CANCEL'
            },
            {
              type: 'MODULE_TYPE',
              name: 'ALERT',
              keys: [
                {
                  type: 'KEY_TYPE',
                  name: 'ERROR'
                }
              ]
            }
          ]
        }
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
