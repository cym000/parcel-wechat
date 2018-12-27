import { createReducer } from '../../util';
import { handlers } from '../actions/sessionFriend';
import initState from '../store/initState';

export default createReducer(initState.sessionFriend, handlers);