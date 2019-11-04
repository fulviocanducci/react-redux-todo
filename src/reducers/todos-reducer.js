import { Add_Item } from '../constants';

function todosReducer(state = { items: [] }, { type, payload }) {
    switch(type){
        case Add_Item: {
            return { items: [...state.items, payload] };
        }
        default:
            return state;
    }
}

export default todosReducer;