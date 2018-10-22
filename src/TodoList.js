import React, { Component } from 'react';
import TodoItem from './TodoItem';

const TodoList = props => (
    <div>
    {
        props.todos.map(todo => (
            <TodoItem key={todo.id} title={todo.title} completed={todo.completed} />
        ))
    }

    </div>
);

export default TodoList;
