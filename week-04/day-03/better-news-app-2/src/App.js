import React, { useState } from 'react';
import ArticleList from './components/ArticleList';

import './App.css';

function App() {
  const [ country, setCountry ] = useState('cn');

  return (
    <div className="App">
      <header>
        Country Code:
        <input type="text" value={country} onChange={(ev) => setCountry(ev.target.value)} />
      </header>
      <ArticleList country={country}/>
    </div>
  );
}

export default App;
