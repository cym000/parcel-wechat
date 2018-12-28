import { createReducer } from '../../util';
import { handlers } from '../actions/socket';
import initState from '../store/initState';

export default createReducer(initState.socketObj, handlers);