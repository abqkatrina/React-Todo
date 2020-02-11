import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css';

////////////////////DATA//////////////////////////////
const tasks = [
  {
    name: 'call Grandma',
    id: 0,
    completed: false
  },
  {
    name: 'pack office supplies',
    id: 1,
    completed: false
  },
  {
    name: 'do dishes',
    id: 2,
    completed: false
  },
  {
    name: 'make doc. appt.',
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
    };
  }

  //TOGGLE FUNCTION
  toggleTask = clickedId => {
    console.log(clickedId);
    const newTodoList = this.state.todoList.map(task => {
      if(task.id === clickedId) {
        return {
          ...task,
          completed: !task.completed
        };
      } else {
        return {
        ...task,
        completed: task.completed
      };
    }});
    this.setState({
      todoList: newTodoList
    });
    console.log(this.state.todoList);
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
  removeTask = () => {
    console.log('remove function');
    const unfinishedList = this.state.todoList.filter(task => {
      if(task.completed === false){
        return{
          ...task,
          completed: !task.completed
        };
      }})
      this.setState({ todoList: unfinishedList })
    };


  render() {
    return (
      <div>
        <div className='header'>
          <Header />
        </div>
        <div className='main'>
          {/* <p>App will hold all the data needed for this project. It will also be the container for your Todo Components.
            <br/>
              - All of your application data will be stored here.
              <br/>
              - All of your `handler` functions should live here.</p> */}
          {/* <Switch> */}
            {/* <Route path='/todolist' render={(routeProps) => <TodoList {...routeProps} tasks={this.state.todoList} toggleTask={this.toggleTask} removeTask={this.removeTask}/>} /> */}
            {/* <Route path='/todoform' render={(routeProps) => <TodoForm {...routeProps} tasks={this.state.todoList} addNewTask={this.addNewTask}  />} /> */}
            {/* <Route path='/todo' render={(props) => <Todo {...props} tasks={this.state.todoList} toggleTask={this.toggleTask}/>} /> */}
          {/* </Switch> */}
          <TodoForm  tasks={this.state.todoList} addNewTask={this.addNewTask} removeTask={this.removeTask} />
          <TodoList  tasks={this.state.todoList} toggleTask={this.toggleTask} />
        </div>
      </div>
    );
  }
}

export default App;
