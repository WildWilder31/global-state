import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import TodoStats from './TodoStats';
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


  // Reçoit un id de todo
  toggleCompleted = todoId => {
    // 1. Retrouver le todo concerné dans this.state.todos par son id
    // find permet de trouver l'élément lui-même selon un critère (fonction)
    // findIndex même chose mais renvoie l'index dans le tableau
    // const todoIndex = this.state.todos.findIndex(todo => todo.id === todoId);
    // const todo = this.state.todos[todoIndex];
    // // const todos = this.state.todos.slice(); // ES5
    // const todos = [...this.state.todos]; // ES6 spread operator
    // todos.splice(todoIndex, 1, { ...todo, completed: !todo.completed });

    // 2. map
    const todos = this.state.todos.map(
      todo => todo.id !== todoId
      ? todo
      : { ...todo, completed: !todo.completed } // Object.assign(todo, { completed: !todo.completed })
    );

    this.setState({
        todos: todos
    });
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
        <TodoStats todos={this.state.todos} />
        <TodoList
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
        />
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
