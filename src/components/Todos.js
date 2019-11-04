import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AddItem } from '../actions';

function Todos({todos, AddItem}) {    
    return (
        <>
            <div>
                Todos
                <button onClick={e => AddItem({id: Math.random(), name: Math.random()})}>Adicionar</button>
            </div>
            <div>
                {
                    todos.map((todo,index) =>(
                        <div key={index}>
                            {todo.id} {todo.name}
                        </div>
                    ))
                }
            </div>
        </>
    )
}

function mapStateToProps(state) {
    return { 
        todos: state.todos.items
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        AddItem
    }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todos);