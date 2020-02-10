import React, { Component } from 'react';
import TodoList from './TodoList';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            newTask: ''
        };
    }

    handleChange = event => {
        this.setState({newTask: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addNewTask(this.state.newTask);
    };

    render(){
        return(
            <div>
                <h1>TODOFORM.JS</h1>
                <p>TodoForm will hold your input field and your `Add Todo` and `Clear Completed` buttons.
                - Your input field should take in user input, and allow a user to press `Enter` or click on
                the `Submit Button` to add a todo to your list.
                - Once a todo is submitted, the Todo List should re-render and show the added todo.
                this is the input page that sends new data to todo</p>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='task' placeholder='task' value={this.state.newTask} onChange={this.handleChange}/>
                    <button type='submit'>Add Task</button>
                 
                </form>
                <TodoList listItem={this.listItem} />
            </div>
        )
    }
}
export default TodoForm;