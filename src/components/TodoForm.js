import React, { Component } from 'react';



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

    // handleClick = event => {
    //     this.props.removeTask();
    // };

    render(){
        return(
            <div>
                <h3>TODOFORM.JS</h3>
                <p>TodoForm will hold your input field and your `Add Todo` and `Clear Completed` buttons.
                    <br/>
                - Your input field should take in user input, and allow a user to press `Enter` or click on
                the `Submit Button` to add a todo to your list.
                <br/>
                - Once a todo is submitted, the Todo List should re-render and show the added todo.
                </p>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='task' placeholder='task' value={this.state.newTask} onChange={this.handleChange}/>
                    <button type='submit'>Add Task</button>
                    {/* <button className="remove" value={this.state.task} onClick={this.handleClick}>
                    Remove Completed
                </button> */}
                </form>
         
            </div>
        )
    }
}
export default TodoForm;