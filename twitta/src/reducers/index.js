import { combineReducers } from 'redux';
import streamReducer from './streamReducer';
import profileReducer from './profileReducer';
import trendsReducer from './trendsReducer';

export default combineReducers({
  streams: streamReducer,
  profile: profileReducer,
  trends: trendsReducer
});
