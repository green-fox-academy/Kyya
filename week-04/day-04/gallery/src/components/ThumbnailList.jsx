import React, { useRef, useEffect } from 'react';
import { fetchPhotos, setActiveIndex } from '../redux/actionCreator'
import { useSelector, useDispatch } from 'react-redux';
import Thumbnail from './Thumbnail';

const SCROLL_DURATION = 7;

function ThumbnailList() {
  const photos = useSelector(state => state.photos);
  const activeIndex = useSelector(state => state.activeIndex);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const ref = useRef(null);

  function handleWheel(ev) {
    ref.current.scrollLeft += ev.deltaY / SCROLL_DURATION;
  }

  if (photos.length === 0) {
    return 'Nothing...';
  }

  return (
    <div className="thumbnails" ref={ref} onWheel={handleWheel}>
      <div className="thumbnails-container">
        {photos.map(
          (photo, index) => (
            <Thumbnail key={index}
              active={index === activeIndex}
              src={photo.urls.thumb}
              onClick={() => dispatch(setActiveIndex(index))}
            />)
        )}
      </div>
    </div>
  )
}

export default ThumbnailList;
