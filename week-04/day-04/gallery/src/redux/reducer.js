import { ACTIVATE_INDEX, FETCH_PHOTOS } from './actionCreator';

function activeIndex(state = 0, action) {
  switch(action.type) {
    case ACTIVATE_INDEX:
      return action.index;
    default:
      return state;
  }
}

function photos(state = [], action) {
  switch(action.type) {
    case FETCH_PHOTOS:
      return [...state, ...action.photos];
    default:
      return state;
  }
}

export {
  activeIndex,
  photos
}
