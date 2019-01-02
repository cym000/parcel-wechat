const SET_SETTING = 'SET_SETTING';

const setSetting = (params = {}) => (dispatch) => {
    return dispatch({
        type: SET_SETTING,
        payload: params
    });
};

export default {
    setSetting,
};

export const handlers = {
    [SET_SETTING]: (state, { payload }) => {
        return {
            ...state,
            ...payload
        };
    },
};