import React, { useEffect } from 'react';
import { setActiveIndex } from '../redux/actionCreator';
import { useSelector, useDispatch } from 'react-redux';
import Arrow from '../components/Arrow';

export default function Gallery() {
  const activeIndex = useSelector(state => state.activeIndex);
  const lengthOfPhotos = useSelector(state => state.photos.length);
  const display = useSelector(state => state.photos[state.activeIndex] || null);
  const dispatch = useDispatch();

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
    const newIndex = (activeIndex + 1) < 0 ? lengthOfPhotos - 1 : (activeIndex + 1) % lengthOfPhotos;
    dispatch(setActiveIndex(newIndex));
  }

  function prevPhoto() {
    const newIndex = (activeIndex - 1) < 0 ? lengthOfPhotos - 1 : (activeIndex - 1) % lengthOfPhotos;
    dispatch(setActiveIndex(newIndex));
  }

  if (display === null) {
    return 'Loading...'
  }

  return (
    <div className="gallery">
      <button className="gallery-button" onClick={prevPhoto}><Arrow /></button>
      <div className="gallery-main" style={{ backgroundImage: `url(${display.urls.regular})`}}>
        <div className="gallery-meta">
          <h1>{display.description || 'Title'}</h1>
          <p>{display.alt_description || 'Description'}</p>
        </div>
      </div>
      <button className="gallery-button" onClick={nextPhoto}><Arrow right /></button>
    </div>
  )
}
