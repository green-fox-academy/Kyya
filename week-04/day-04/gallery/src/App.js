import React, { useState, useEffect } from 'react';
import Gallery from './components/Gallery';
import ThumbnailManager from './components/ThumbnailManager';
import { getRandomPhotos } from './request';
import './App.css';

function App() {
  const [photos, setPhotos] = useState([]);
  const [display, setDisplay] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getRandomPhotos().then(res => {
      setPhotos(res);
      setDisplay(res[0]);
    });
  }, []);

  function handleActiveIndexChange(newIndex) {
    if (newIndex < 0) {
      newIndex = photos.length - 1;
    }
    newIndex = newIndex % photos.length;
    setActiveIndex(newIndex);
    setDisplay(photos[newIndex]);
  }

  const activeProps = {
    activeIndex,
    onActiveIndexChange: handleActiveIndexChange
  }

  return (
    <div className="App">
      <div className="container">
        <Gallery display={display} {...activeProps}/>
        <ThumbnailManager photos={photos} {...activeProps}/>
      </div>
    </div>
  );
}

export default App;
