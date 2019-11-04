import React from 'react';
import data from './data';
import HotelFilter from './components/HotelFilter';
import HotelList from './components/HotelList';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header>Hotel List</header>
      <div className="container">
        <aside>
          <HotelFilter title="Star rating" list={data.filters['Star rating']} />
          <HotelFilter title="Property type" list={data.filters['Property type']} />
        </aside>
        <main>
          <HotelList list={data.hotels} />
        </main>
      </div>
    </div>
  );
}

export default App;
