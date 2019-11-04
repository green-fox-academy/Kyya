import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Button from './components/Button';
import Display from './components/Display';
import './styles/App.css';

export default class App extends Component {
  state = {
    countOfAcorns: 0
  }

  static propTypes = {
    countOfAcorns: PropTypes.number
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  handleChange = (number) => {
    this.setState((prevState) => {
      let countOfAcorns = prevState.countOfAcorns + number;
      countOfAcorns = Math.max(0, countOfAcorns);
      return { countOfAcorns };
    })
  }

  handleIncrement = () => this.handleChange(1);

  handleDecrease = () => this.handleChange(-1);

  handleKeydown = (ev) => {
    if (ev.key === 'ArrowUp') {
      this.handleIncrement(1);
    } else if (ev.key === 'ArrowDown') {
      this.handleDecrease(1);
    }
  }

  render() {
    return (
      <Fragment>
        <Button text="Buy one" onClick={() => this.handleIncrement(1)} />
        <Display>{this.state.countOfAcorns}</Display>
        <Button text="Eat one" onClick={() => this.handleDecrease(1)} />
      </Fragment>
    )
  }
}
