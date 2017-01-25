import React, {Component} from 'react';

const HigherOrderRow = ComposedComponent => class extends Component {
  render() {
    return (
      <tr>
        <td>
          <ComposedComponent {...this.props}/>
        </td>
      </tr>
    );
  }
};

export default HigherOrderRow;
