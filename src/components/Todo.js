import React from 'react';


const Todo = props  => {
 

    return (
        <div 
            onClick={() => props.toggleTask(props.task.id)}
            className={`task${props.task.completed ? ' completed' : ''} listItem`}
        >
            <p> 
                {props.task.name}
            </p>
            {/* <input type='checkbox' value='completed' onSelect={props.toggleTask}/> */}
        </div>
    );
}

export default Todo;