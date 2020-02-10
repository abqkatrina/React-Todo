// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const TodoList = props => {
 


    return(
        <div>
            <h3>TODOLIST.JS</h3>
            <p>
                TodoList  receives your Todos array and iterates over the list generating a new Todo for each element in the array.
            </p>  

            <div className="todoList">
                {props.tasks.map(task => (
                    <Todo key={task.id} task={task} toggleTask={props.toggleTask} /*markComplete={props.markComplete}*//>
                ))}
            </div>
        </div>
    )
}
export default TodoList;