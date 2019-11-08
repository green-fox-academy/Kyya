import React, { useEffect } from 'react';
import Arrow from './Arrow';

export default function Gallery(props) {

  function handleKeyDown(ev) {
    if (ev.key === "ArrowRight") {
      nextPhoto();
    } else if (ev.key === "ArrowLeft") {
      prevPhoto();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  })

  function nextPhoto() {
    props.onActiveIndexChange(props.activeIndex + 1);
  }

  function prevPhoto() {
    props.onActiveIndexChange(props.activeIndex - 1);
  }

  if (props.display === null) {
    return 'Loading...'
  }

  return (
    <div className="gallery">
      <button className="gallery-button" onClick={prevPhoto}><Arrow /></button>
      <div className="gallery-main" style={{ backgroundImage: `url(${props.display.urls.regular})`}}>
        <div className="gallery-meta">
          <h1>{props.display.description || 'Title'}</h1>
          <p>{props.display.alt_description || 'Description'}</p>
        </div>
      </div>
      <button className="gallery-button" onClick={nextPhoto}><Arrow right /></button>
    </div>
  )
}
