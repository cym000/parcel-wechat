import { createReducer } from '../../util';
import { handlers } from '../actions/messages';
import initState from '../store/initState';

export default createReducer(initState.messages, handlers);