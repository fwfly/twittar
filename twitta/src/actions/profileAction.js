import { FETCH_PROFILE } from './types';

export const fetchProfile = () => async dispatch => {
  const res = await fetch('/api/account/');
  const jsondata = await res.json();
  dispatch( { type: FETCH_PROFILE, payload: jsondata } );
}
