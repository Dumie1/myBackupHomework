import React from 'react';
import Todos from './Todos.json';
import Form from './Form';

class Data extends React.Component {

    state = {
        Todos
    }


    descriptionInput = React.createRef();
    deadlineInput = React.createRef();


    addTodo = (event) => {
        event.preventDefault();

        const descriptionInput = this.descriptionInput.current.value;
        const deadlineInput = this.deadlineInput.current.value;

        this.setState((prevState) => {
            let todos = prevState.todos;

            Todos.push({
                id: Todos.length + 1,
                description: descriptionInput,
                deadline: deadlineInput,
                done: false,
            });
            return { Todos: todos };
        });

        this.descriptionInput.current.value = '';
        this.deadlineInput.current.value = '';
    }


    deleteTodo = (id) => {
        this.setState((prevState) => {
            let todos = prevState.todos;
            Todos.splice(id, 1);
            return { Todos: todos };
        });
    }


    isTaskDone = (todo) =>{
        todo.done = !todo.done;
        this.setState({
            todos: this.state.todos 
        });
    }


    renderTodos = () => {
        // if (this.state.Todos.length === 0) return <p className='noItems'>No items...</p>

        const textStyle = { textDecoration: 'line-through', backgroundColor: '#0455d8'}

        return <ul>
            {
                Todos.map((todo, id) => {
                    return (
                        <li key={id}>
                            <input checked={todo.done} type='checkbox' onChange={this.isTaskDone.bind(this, todo)} />
                            <span style={todo.done ? textStyle : null}>
                                {todo.description} , {todo.deadline}
                            </span>
                            <button onClick={this.editTodo} className='edit'>Edit</button>
                            <button onClick={(event)=>this.deleteTodo(id)} className='remove'>Remove</button>
                        </li>
                           
                    )
                })
            }
        </ul>
    }

    render() {
        
        return (
            
             <div>
                <Form
                    addTodo={this.addTodo}
                    descriptionInput={this.descriptionInput}
                    deadlineInput={this.deadlineInput}
                />
                <div className='items'>
                    {this.renderTodos()}
                    
                </div>
             </div> 
        )
    }
}

export default Data;
