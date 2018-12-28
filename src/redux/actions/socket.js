import { Socket } from '../../util';
const FETCH_SOCKET = 'FETCH_SOCKET';

const fetchSocket = (url) => (dispatch) => {
    return dispatch({
        type: FETCH_SOCKET,
        payload: url
    });
};

export default {
    fetchSocket,
};

export const handlers = {
    [FETCH_SOCKET]: (state, { payload }) => {
        return new Socket(payload);
    },
};