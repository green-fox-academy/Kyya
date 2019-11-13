import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import counter from './components/Counter/reducer';
import tags from './components/Tags/reducer';

const rootReducers = combineReducers({
  counter,
  tags
})

export default createStore(rootReducers, applyMiddleware(thunk));
