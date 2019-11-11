import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  activeIndex,
  photos
} from './redux/reducer';

const rootReducer = combineReducers({
  activeIndex,
  photos
})

export default createStore(rootReducer, applyMiddleware(thunk));
