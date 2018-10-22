import React, { Component } from 'react';
import TodoItem from './TodoItem';

const TodoList = props => (
    <div>
    {
        props.todos.map(todo => (
            <TodoItem
                key={todo.id}
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
                toggleCompleted={props.toggleCompleted}
            />
        ))
    }

    </div>
);

export default TodoList;
