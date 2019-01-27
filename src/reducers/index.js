import {combineReducers} from 'redux';
import GitReducer from './gitReducer.js';
import ActiveRepo from './activeReducer.js';

export default combineReducers({
  repos: GitReducer,
  activeRepo: ActiveRepo
});