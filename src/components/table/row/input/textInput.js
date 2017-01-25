import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateKey} from '../../../../redux/actions';

class TextInput extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);

    this.state = {
      value: props.data.item.value || ""
    }
  }

  onChange(event) {
    this.setState({value: event.target.value});
  }

  onBlur() {
    let item = this.props.data.item;
    let updatedValue = Object.assign({}, item, {value: this.state.value});
    this.props.saveItem(item, updatedValue);
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
    saveItem: (oldItem, newItem) => dispatch(updateKey(oldItem, newItem))
  }
};

export default connect(null, mapDispatchToProps)(TextInput);
