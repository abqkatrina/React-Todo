import React from 'react';


const Todo = props  => {
 
    return (
        <div
          onClick={() => props.toggleTask(props.task.id)}
          className={`task${props.task.completed ? ' completed' : ''}`}
        >
          <p>{props.tasks}</p>
        </div>
      );
}

export default Todo;