import React, {Component} from 'react';

export default class Root extends Component {
  constructor() {
    super();

    this.state = {
      stuff: 'stuff'
    };
  }

  render() {
    return (
      <div>{this.state.stuff}</div>
    );
  }
}
