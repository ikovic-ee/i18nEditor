import React, {Component} from 'react';
import {connect} from 'react-redux';
import Table from './table/table';
import getUid from 'get-uid';

class Root extends Component {
  constructor() {
    super();

    /*this.state = {
      languages: ['en', 'zh']
    };*/
  }

  createTranslationTables() {
    return this.state.languages.map(language => {
      return (
        <Table key={getUid()} title={language} rows={[]}/>
      );
    }, this);
  }

  render() {
    //{this.createTranslationTables()}
    return (
      <div>
        <Table
          namespaces={this.props.namespaces}
          keys={this.props.keys}
          title="Modules & Keys"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    namespaces: state.namespaces,
    keys: state.keys
  }
};

export default connect(mapStateToProps)(Root);
