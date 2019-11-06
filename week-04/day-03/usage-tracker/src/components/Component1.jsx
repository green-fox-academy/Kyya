import React from 'react';

export default class Component1 extends React.Component {

  constructor(props) {
    super(props);
    this.startTime = Date.now();
  }

  componentDidMount() {
    this.props.onMount({ name: 'Component 1', time: Date.now() - this.startTime})
  }

  render() {
    return <p>This is the content of Component 1</p>
  }
}
