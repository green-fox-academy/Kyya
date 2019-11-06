import React from 'react';
import ArticleList from './components/ArticleList';

import './App.css';

class App extends React.Component {
  state = {
    country: 'cn'
  }

  render() {
    return (
      <div className="App">
        <header>
          Country Code:
          <input type="text" value={this.state.country} onChange={(ev) => this.setState({ country: ev.target.value })} />
        </header>
        <ArticleList country={this.state.country} />
      </div>
    );
  }
}

export default App;
