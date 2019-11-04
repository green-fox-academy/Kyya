import React, { Component } from 'react';
import Todo from './components/Todo';
import DoneTodo from './components/DoneTodo';
import './styles/App.css';

function byPriority(a, b) {
  return (a.prio - b.prio);
}

const defaultState = {
  todo: [
    {
      text: 'Feed the monkey',
      prio: 2
    },
    {
      text: 'Buy milk',
      prio: 1
    }
  ],
  doneTodo: [
    {
      text: 'Sleep 8 hours',
      prio: 2
    },
    {
      text: 'Mentoring others',
      prio: 1
    }
  ],
}

export default class TodoApp extends Component {

  state = defaultState;

  doneTodo(todo) {
    this.setState({
      doneTodo: [
        ...this.state.doneTodo,
        todo
      ],
      todo: this.state.todo.filter(item => item.text !== todo.text)
    })
  }

  deleteTodo(todo) {
    this.setState({
      doneTodo: this.state.doneTodo.filter(item => item.text !== todo.text)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>TODOS:</h1>
        <ul>
        { 
          this.state.todo
            .sort(byPriority)
            .map(item => (
              <li key={item.text}>
                <Todo text={item.text} onAction={() => this.doneTodo(item)}/>
              </li>
            ))
        }
        </ul>
        <h1>DONE TODOS:</h1>
        <ul>
        {
          this.state.doneTodo
            .sort(byPriority)
            .map(item => (
              <li key={item.text}>
                <DoneTodo text={item.text} onAction={() => this.deleteTodo(item)}/>
              </li>
            ))
        }
        </ul>
      </div>
    );
  }
}
