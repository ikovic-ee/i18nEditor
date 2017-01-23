import React, {Component} from 'react';

export default class TextInput extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);

    this.state = {
      value: props.value || ""
    }
  }

  onChange(event) {
    this.setState({value: event.target.value});
  }

  onBlur() {
    this.props.saveChange(this.state.value);
  }

  render() {
    return (
      <input type="text" value={this.state.value}
             onChange={this.onChange}
             onBlur={this.onBlur}
             readOnly={this.props.readOnly}/>
    );
  }

}
