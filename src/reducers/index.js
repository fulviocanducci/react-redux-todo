import { combineReducers } from 'redux';

import todosReducer from './todos-reducer';

const reducer = combineReducers({
    todos: todosReducer
});

export default reducer;