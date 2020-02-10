import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
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
            <Route path='/todolist' component={TodoList} />
            <Route path='/todoform' component={TodoForm} />
            <Route path='/todo' component={Todo} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
