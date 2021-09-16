import { Component } from 'react';
import TodoList from './components/todos/TodoList';
import TodoForm from './components/todos/TodoForm';

class App extends Component {
  state = { 
    todos: [
      { id: 1, title: "Learn rails", complete: true },
      { id: 2, title: "Learn react", complete: false },
      { id: 3, title: "Learn router", complete: false },
    ]
  }

  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  addTodo = (incomingTodo) => {
    const { todos } = this.state
    const newTodo = { id: this.getUniqId(),  ...incomingTodo }
    // const newTodo = { id: getUniqId(), title: incomingTodo.title, complete: incomingTodo.complete }
    this.setState({ todos: [newTodo, ...todos]})
  }

  render () {
    const { todos } = this.state
    // const todos = this.state.todos
    return (
      <>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={todos}/>
      </>
    )
  }
}

export default App;
