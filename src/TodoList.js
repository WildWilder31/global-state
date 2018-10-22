import React, { Component } from 'react';
import TodoItem from './TodoItem';
import todos from './data/todos';

const TodoList = props => (
    <div>
    {
        todos.map(todo => (
            <TodoItem key={todo.id} title={todo.title} completed={todo.completed} />
        ))
    }

    </div>
);

export default TodoList;
