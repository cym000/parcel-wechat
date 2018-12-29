import { createReducer } from '../../util';
import { handlers } from '../actions/user';
import initState from '../store/initState';

export default createReducer(initState.user, handlers);