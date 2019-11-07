import React from 'react';
import Thumbnail from './Thumbnail';

export default function ThumbnailManager(props) {
  return (
    <div className="thumbnails">
      {props.photos.map(
          (photo, index) => (
            <Thumbnail key={index} 
              active={index === props.activeIndex}
              src={photo.urls.thumb}
              onClick={() => props.onActiveIndexChange(index)}
            />)
      )}
    </div>
  )
}
