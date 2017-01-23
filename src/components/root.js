import React, {Component} from 'react';
import Table from './table/table';
import getUid from 'get-uid';

export default class Root extends Component {
  constructor() {
    super();

    this.state = {
      languages: ['en', 'zh'],
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

  createTranslationTables() {
    return this.state.languages.map(language => {
      return (
        <Table key={getUid()} title={language} rows={[]}/>
      );
    }, this);
  }

  render() {
    return (
      <div>
        <Table
          rows={this.state.rows}
          title="Modules & Keys"
        />
        {this.createTranslationTables()}
      </div>
    );
  }
}
