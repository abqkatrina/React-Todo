// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, { Component } from 'react';

class TodoList extends Component {
    render(){
        return(
            <h1>TODOLIST.JS</h1>
            <p>TodoList  receives your Todos array and iterates over the list generating a new Todo for each element in the array.</p>
        )
    }
}
export default TodoList;