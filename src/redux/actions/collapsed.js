const COLLAPSED_TOGGLE = 'COLLAPSED_TOGGLE';
const COLLAPSED_SHOW = 'COLLAPSED_SHOW';
const COLLAPSED_HIDE = 'COLLAPSED_HIDE';

const collapsedToggle = () => (dispatch) => {
    return dispatch({
        type: COLLAPSED_TOGGLE
    });
};

const collapsedShow = () => (dispatch) => {
    return dispatch({
        type: COLLAPSED_SHOW
    });
};

const collapsedHide = () => (dispatch) => {
    return dispatch({
        type: COLLAPSED_HIDE
    });
};

export default {
    collapsedToggle,
    collapsedShow,
    collapsedHide
};

export const handlers = {
    [COLLAPSED_TOGGLE]: (collapsed) => {
        return !collapsed;
    },
    [COLLAPSED_SHOW]: (collapsed) => {
        console.log(collapsed);
        return true;
    },
    [COLLAPSED_HIDE]: (collapsed) => {
        return false;
    },
};