import { combineReducers } from 'redux';
import streamReducer from './streamReducer';
import profileReducer from './profileReducer'

export default combineReducers({
  streams: streamReducer,
  profile: profileReducer
});
