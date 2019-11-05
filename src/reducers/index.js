import { combineReducers } from 'redux';

import todosReducer from './todos-reducer';
import counterReducer from './counter-reducer';

const reducer = combineReducers({
  todos: todosReducer,
  counter: counterReducer
});

export default reducer;