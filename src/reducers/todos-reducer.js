import { AddItem } from '../constants';

function todosReducer(state = { items: [] }, { type, payload }) {
    switch(type){
        case AddItem: {
            return { items: [...items, payload] };
        }
        default:
            return state;
    }
}

export default todosReducer;