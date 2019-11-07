import React from 'react';

export default class Component1 extends React.Component {

  componentDidMount() {
    this.startTime = Date.now();
  }

  componentWillUnmount() {
    this.props.onUnMount({ name: 'Component 1', time: `${Math.ceil((Date.now() - this.startTime) / 1000)}s` });
  }

  render() {
    return <p>This is the content of Component 1</p>
  }
}
