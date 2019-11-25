import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { posts } from './redux/reducer';

const rootReducer = combineReducers({
  posts
})

export default createStore(rootReducer, applyMiddleware(thunk));
