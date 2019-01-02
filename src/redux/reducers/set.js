import { createReducer } from '../../util';
import { handlers } from '../actions/set';
import initState from '../store/initState';

export default createReducer(initState.set, handlers);