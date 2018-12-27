import { combineReducers } from 'redux';
import collapsed from './collapsed';
import sessionFriend from './sessionFriend';

export default combineReducers({
    collapsed,
    sessionFriend
});