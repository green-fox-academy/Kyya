import React from 'react';
import Arrow from './Arrow';

export default function Gallery(props) {

  if (props.display === null) {
    return 'Loading...'
  }

  function nextPhoto() {
    props.onActiveIndexChange(props.activeIndex + 1);
  }

  function prevPhoto() {
    props.onActiveIndexChange(props.activeIndex - 1);
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
