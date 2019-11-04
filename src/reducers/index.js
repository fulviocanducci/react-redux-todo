import { combineReducer } from 'redux';
import todosReducer from './todos-reducer';

const reducer = combineReducer({
    todos: todosReducer
});

export default reducer;