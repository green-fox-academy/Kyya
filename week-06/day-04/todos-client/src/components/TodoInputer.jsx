import React, { Component } from 'react';

export default class TodoInputer extends Component {
  state = {
    value: ''
  }

  handleChange = (ev) => {
    this.setState({ value: ev.target.value })
  }

  handleAction = () => {
    if (this.state.value.length >= 3) {
      this.props.onAction(this.state.value)
      this.setState({ value: '' });
    } else {
      alert('Please make sure that todo text should at least 3 characters.');
    }
  }

  render() {
    return (
      <div className="todo-inputer">
        <input value={this.state.value} onChange={this.handleChange}/>
        <button className="button button-text" onClick={this.handleAction}>Add</button>
      </div>
    )
  }
}
