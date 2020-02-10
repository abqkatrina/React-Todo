import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

////////////////////DATA//////////////////////////////
const tasks = [
  {
    name: 'Call Grandma',
    id: 0,
    completed: false
  },
  {
    name: 'Pack office supplies',
    id: 1,
    completed: false
  },
  {
    name: 'Do dishes',
    id: 2,
    completed: false
  },
  {
    name: 'Make doc. appt.',
    id: 3,
    completed: false
  }
]

/////////////////////////CREATE COMPONENT//////////////////////////
class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: tasks
    }
  }
  //TOGGLE FUNCTION
  toggleTask = clickedId => {
    const newTodoList = this.state.todoList.map(task=> {
      if (task.id === clickedId) {
        return {
          ...task,
          completed: !task.completed
        };
      } else {
        return task;
      }
    });
    this.setState({
      todoList: newTodoList
    });
  };

  // ADD FUNCTION
  addNewTask = taskText => {
    const newTask = {
      name: taskText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTask]
    });
  }

  //REMOVE FUNCTION
  removeTask = clickedId => {
   const unfinishedList = this.state.todoList.filter(task => {
     if(task.id != clickedId){
       return {
        ...task
       }
   }});
   this.setState({
     todoList: unfinishedList
   });
  };


  render() {
    return (
      <div>
        <div className='header'>
          <Header />
        </div>
        <div className='switchBox'>
          <p>App will hold all the data needed for this project. It will also be the container for your Todo Components.
              - All of your application data will be stored here.
              - All of your `handler` functions should live here.</p>
          <Switch>
            <Route path='/todolist' render={(props) => <TodoList {...props} tasks={this.state.todoList} toggleTask={this.toggleTask} removeTask={this.removeTask}/>} />
            <Route path='/todoform' render={(props) => <TodoForm {...props} addNewTask={this.addNewTask}  />} />
            {/* <Route path='/todo' render={(props) => <Todo {...props} tasks={this.state.todoList} toggleTask={this.toggleTask}/>} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
