import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './TodoItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoItem title="Faire la vaisselle" completed />
        <TodoItem title="Trier mes backups" completed={false} />
      </div>
    );
  }
}

export default App;
