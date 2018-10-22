import React, { Component } from 'react';

// props ou this.props ?
// ça dépend du "type" (classe ou fonction) de composant
// ici TodoItem reçoit ses props directement en paramètre
// 
const TodoItem = props => (
    <div className="TodoItem">
        <input
            type="checkbox"
            checked={props.completed}
            onChange={() => props.toggleCompleted(props.id)}
        />
        <span>{props.title}</span>
    </div>
);

export default TodoItem;
