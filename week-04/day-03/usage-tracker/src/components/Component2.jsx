import React from 'react';

export default class Component2 extends React.Component {

  componentDidMount() {
    this.startTime = Date.now();
  }
  
  componentWillUnmount() {
    this.props.onUnMount({ name: 'Component 2', time: `${Math.ceil((Date.now() - this.startTime) / 1000)}s` });
  }

  render() {
    return <p>This is the content of Component 2</p>
  }
}
