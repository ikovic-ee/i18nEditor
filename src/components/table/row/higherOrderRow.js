import React, {Component} from 'react';

const HigherOrderRow = ComposedComponent => class extends Component {
  render() {
    return (
      <tr>
        <td style={{paddingLeft: this.props.level * 10}}>
          <ComposedComponent {...this.props}/>
        </td>
      </tr>
    );
  }
};

export default HigherOrderRow;
