import { getRandomPhotos } from '../utils/request';

export const ACTIVATE_INDEX = 'ACTIVATE_INDEX';
export const FETCH_PHOTOS = 'FETCH_PHOTOS';


export function setActiveIndex(index) {
  return { type: ACTIVATE_INDEX, index };
}

export function fetchPhotos() {
  return (dispatch) => {
    getRandomPhotos()
      .then(res => dispatch({ type: FETCH_PHOTOS, photos: res }));
  }
}
