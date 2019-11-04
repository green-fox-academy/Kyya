import React, { Component } from 'react';
import './styles/App.css';

export default class App extends Component {
  state = {
    leftOperand: '',
    rightOperand: '',
    operator: '',
    result: '',
    disabled: true
  }

  getEmptyFields() {
    return [
      this.state.leftOperand,
      this.state.rightOperand,
      this.state.operator
    ].filter(item => item === '').length;
  }

  handleChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value
    }, () => {
        this.setState({ disabled: this.getEmptyFields() === 0 ? false : true })
    })
  }

  handleClick = () => {
    let result;
    try {
      result = this.calculate(this.state.leftOperand, this.state.rightOperand, this.state.operator)
    } catch (error) {
      result = error.message;
    }
    this.setState({ result });
  }

  calculate(left, right, operator) {
    if (isNaN(left) || isNaN(right)) {
      throw new Error("The first and the last input field should be a number");
    }
    left = Number(left);
    right = Number(right);
    switch(operator) {
      case '+':
        return left + right;
      case '-':
        return left - right;
      case '*':
        return left * right;
      case '/':
        return left / right;
      default:
        throw new Error("Please choose a good operator: (+, -, /, *)");
    }
  }

  render() {
    return (
      <div className="App">
        <input name="leftOperand" type="text" value={this.state.leftOperand} onChange={this.handleChange}/>
        <input name="operator" type="text" value={this.state.operator} onChange={this.handleChange}/>
        <input name="rightOperand" type="text" value={this.state.rightOperand} onChange={this.handleChange}/>
        <button disabled={this.state.disabled} onClick={this.handleClick}>Click me</button>
        <p>Result: {this.state.result}</p>
      </div>
    );
  }
}
