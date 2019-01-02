import { createReducer } from '../../util';
import { handlers } from '../actions/friends';
import initState from '../store/initState';

export default createReducer(initState.friends, handlers);