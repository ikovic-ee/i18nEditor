import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateNamespace} from '../../../../redux/actions';

class TextInput extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);

    this.state = {
      value: props.data.item.name || ""
    }
  }

  onChange(event) {
    this.setState({value: event.target.value});
  }

  onBlur() {
    let index = this.props.data.parent.keys.indexOf(this.props.data.item);
    let updatedValue = Object.assign({}, this.props.data.item, {name: this.state.value});
    this.props.saveItem(updatedValue, this.props.data.parent, index);
  }

  render() {
    return (
      <input type="text"
             value={this.state.value}
             onChange={this.onChange}
             onBlur={this.onBlur}
             readOnly={this.props.readOnly}/>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveItem: (item, parent, index) => {
      dispatch(updateNamespace(item, parent, index));
    }
  };
};

export default connect(null, mapDispatchToProps)(TextInput);
