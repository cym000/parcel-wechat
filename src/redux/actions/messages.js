import isUndefined from 'lodash/isUndefined';
import findLastIndex from 'lodash/findLastIndex';

const FETCH_MESSAGES = 'FETCH_MESSAGES';
const ADD_MESSAGE = 'ADD_MESSAGE';

const fetchMessages = (friend, messages) => (dispatch) => {
    return dispatch({
        type: FETCH_MESSAGES,
        payload: {
            messages,
            friend
        }
    });
};

const addMessage = (friend, message) => (dispatch) => {
    return dispatch({
        type: ADD_MESSAGE,
        payload: {
            message,
            friend
        }
    });
};

export default {
    fetchMessages,
    addMessage,
};

export const handlers = {
    [FETCH_MESSAGES]: (state, { payload }) => {
        const { friend, messages } = payload;
        state[friend.userName] = messages;
        return state;
    },
    [ADD_MESSAGE]: (state, { payload }) => {
        let msgs = {...state};
        const { friend, message } = payload;
        if (isUndefined(state[friend.userName])) {
            msgs[friend.userName] = [];
        }
        const messages = msgs[friend.userName];
        const index = findLastIndex(messages, item => item.msgTime);
        let showTime = true;
        if (index !== -1) {
            if (messages[index].msgTime === message.msgTime) {
                showTime = false;
            }
        }
        let msg = {...message};
        if (showTime) {
            msg = {
                ...msg,
                showTime
            };
        }
        msgs[friend.userName] = [
            ...msgs[friend.userName],
            msg
        ];
        return msgs;
    },
};