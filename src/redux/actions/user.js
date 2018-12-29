const FETCH_USER = 'FETCH_USER';

const fetchUser = (user) => (dispatch) => {
    return dispatch({
        type: FETCH_USER,
        payload: user
    });
};


export default {
    fetchUser,
};

export const handlers = {
    [FETCH_USER]: (state, { payload }) => {
        return payload;
    },
};