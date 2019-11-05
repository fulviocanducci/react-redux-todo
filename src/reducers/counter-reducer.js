function counterReducer(state = { value: 1 }, {type, payload}) {
    switch(type){
        case 'increment': {
            return { value: state.value + 1 };
        }
        case 'decrement': {
            return { value: state.value - 1 };
        }
        case 'change': {
            return { value: payload };
        }
        case 'sum': {
            return { value: state.value + (payload) };
        }
        default: {
            return state;
        }
    }
}

export default counterReducer;