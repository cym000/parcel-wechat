import { combineReducers } from 'redux';
import collapsed from './collapsed';
import friends from './friends';
import messages from './messages';
import sessionFriend from './sessionFriend';
import socketObj from './socket';
import user from './user';

export default combineReducers({
    collapsed,
    friends,
    messages,
    sessionFriend,
    socketObj,
    user
});