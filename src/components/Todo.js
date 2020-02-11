import React from 'react';


const Todo = props  => {
 

    return (
        <div className='Card'>
            <div 
                onClick={() => props.toggleTask(props.task.id)}
                className={`task${props.task.completed ? 'completed' : ''} listItem`}>
                
                <p> 
                    {props.task.name}
                </p>
                {/* <input type='checkbox' value='completed' onSelect={props.toggleTask}/> */}
            </div>
        </div>
    );
}

export default Todo;