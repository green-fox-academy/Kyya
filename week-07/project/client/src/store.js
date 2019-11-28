import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { posts, user } from './redux/reducer';

const rootReducer = combineReducers({
  posts,
  user
})

export default createStore(rootReducer, applyMiddleware(thunk));
