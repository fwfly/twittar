import {FETCH_TRENDS} from './types';

export const fetchTrends = () => async dispatch => {
  // 23424748 = australia woeid

  let res = await fetch('/api/twit/trends/place/23424748');
  let jsonData = await res.json();
  dispatch( {type: FETCH_TRENDS, payload: jsonData} );
}
