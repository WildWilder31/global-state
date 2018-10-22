import React from 'react';

const TodoStats = props => (
    <div>
        <span># total: {props.todos.length}</span>
        <span># completed: {
            props.todos.filter(todo => todo.completed).length
        }</span>
    </div>
);

export default TodoStats;
