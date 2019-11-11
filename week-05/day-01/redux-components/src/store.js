import { createStore, combineReducers } from 'redux';
import counter from './components/Counter/reducer';
import tags from './components/Tags/reducer';

export default createStore(combineReducers({ 
  counter,
  tags
}));
