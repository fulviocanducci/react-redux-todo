function todosReducer(state = { items: [] }, {type, payload}) {    
  switch(type){
    case 'Add': {
      return { items: [...state.items, payload] };
    }
    default: {
      return state;
    }
  }
}

export default todosReducer;