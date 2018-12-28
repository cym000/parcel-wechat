import { combineReducers } from 'redux';
import collapsed from './collapsed';
import sessionFriend from './sessionFriend';
import socketObj from './socket';

export default combineReducers({
    collapsed,
    sessionFriend,
    socketObj
});