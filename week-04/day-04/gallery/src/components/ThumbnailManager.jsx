import React, { useRef } from 'react';
import Thumbnail from './Thumbnail';

export default function ThumbnailManager(props) {
  const ref = useRef(null);

  function handleWheel(ev) {
    ref.current.scrollLeft += ev.deltaY / 7;
  }

  return (
    <div className="thumbnails" ref={ref} onWheel={handleWheel}>
      <div className="thumbnails-container">
        {props.photos.map(
          (photo, index) => (
            <Thumbnail key={index}
              active={index === props.activeIndex}
              src={photo.urls.thumb}
              onClick={() => props.onActiveIndexChange(index)}
            />)
        )}
      </div>
    </div>
  )
}
