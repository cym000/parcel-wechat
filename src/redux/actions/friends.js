const FETCH_FRIENDS = 'FETCH_FRIENDS';

const fetchFriends = (friends) => (dispatch) => {
    return dispatch({
        type: FETCH_FRIENDS,
        payload: friends
    });
};

export default {
    fetchFriends,
};

export const handlers = {
    [FETCH_FRIENDS]: (state, { payload }) => {
        return payload;
    },
};