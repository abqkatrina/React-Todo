// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const TodoList = props => {
 
        return(
            <div>
                <h1>TODOLIST.JS</h1>
                <p>TodoList  receives your Todos array and iterates over the list generating a new Todo for each element in the array.
                    this is the total list shown.
                </p>
                <div className="todoList">
                {props.tasks.map(task => (
                    <Todo key={task.id} task={task} toggleTask={props.toggleTask}/>
                ))}
                <button className="remove" onClick={props.removeTask}>
                    Remove Completed
                </button>
                </div>
            </div>
        )
}
export default TodoList;