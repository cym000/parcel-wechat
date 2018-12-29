const FETCH_SESSIONFRIEND = 'FETCH_SESSIONFRIEND';
const SET_SESSIONFRIEND = 'SET_SESSIONFRIEND';

const fetchSessionFriend = (sessionFriend) => (dispatch) => {
    return dispatch({
        type: FETCH_SESSIONFRIEND,
        payload: sessionFriend
    });
};

const setSessionFriend = (params = {}) => (dispatch) => {
    return dispatch({
        type: SET_SESSIONFRIEND,
        payload: params
    });
};

export default {
    fetchSessionFriend,
    setSessionFriend
};

export const handlers = {
    [FETCH_SESSIONFRIEND]: (state, { payload }) => {
        return payload;
    },
    [SET_SESSIONFRIEND]: (state, params) => {
        return {
            ...state,
            ...params
        };
    },
};