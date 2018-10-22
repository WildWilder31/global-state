import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import todos from './data/todos.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todos,
      nextId: todos.length + 1
    }
  }

  addTodo = title => {
    const todo = {
      completed: false,
      title: title,
      id: this.state.nextId
    };
    // On serait tenté de faire ça:
    // this.state.todos.push(todo);
    // On pourrait aussi tenter ça:
    // const todos = this.state.todos;
    // todos.push(todo);
    // this.setState({ todos: todos });
    const todos = this.state.todos.concat([todo]);
    this.setState({
      todos: todos,
      nextId: this.state.nextId + 1
    });
  }
  render() {
    return (
      <div className="App">
        <TodoList todos={this.state.todos} />
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
