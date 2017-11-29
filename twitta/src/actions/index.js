import { FETCH_STREAM } from './types';

export const fetchStream = () => async (dispatch) => {
    const res = await fetch('/api/twit/home_timeline');
    const jsondata = await res.json();
    dispatch( {type : FETCH_STREAM, payload : jsondata}  );
}
