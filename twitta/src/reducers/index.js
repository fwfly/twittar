import { combineReducers } from 'redux';
import StreamReducer from './streamReducer';

export default combineReducers({
  streams: StreamReducer
});
