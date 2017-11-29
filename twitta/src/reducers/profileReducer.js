import { FETCH_PROFILE } from '../actions/types';

export default ( state= null, action ) => {
  switch(action.type){
    case FETCH_PROFILE:
      return action.payload;
    default:
      return state;
  }
}
