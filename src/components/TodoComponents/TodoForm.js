import React, { Component } from 'react';

class TodoForm extends Component {
    render(){
        return(
            <div>
                <h1>TODOFORM.JS</h1>
                <p>TodoForm will hold your input field and your `Add Todo` and `Clear Completed` buttons.
                - Your input field should take in user input, and allow a user to press `Enter` or click on
                the `Submit Button` to add a todo to your list.
                - Once a todo is submitted, the Todo List should re-render and show the added todo.</p>
            </div>
        )
    }
}
export default TodoForm;