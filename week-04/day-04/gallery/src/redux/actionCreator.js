import { getRandomPhotos } from '../utils/request';

export const ACTIVATE_INDEX = 'ACTIVATE_INDEX';
export const FETCH_PHOTOS = 'FETCH_PHOTOS';

export function setActiveIndex(index) {
  return { type: ACTIVATE_INDEX, index };
}

export function fetchPhotos() {
  return (dispatch) => {
    const stringOfPhotos = window.localStorage.getItem('photos');
    if (stringOfPhotos) {
      const photos = JSON.parse(stringOfPhotos);
      dispatch({ type: FETCH_PHOTOS, photos });
      console.log('Using LocalStorage\'s Photos: ');
      console.log(photos);
    } else {
      getRandomPhotos()
        .then(res => {
          dispatch({ type: FETCH_PHOTOS, photos: res });
          window.localStorage.setItem('photos', JSON.stringify(res));
        });
    }
  }
}
