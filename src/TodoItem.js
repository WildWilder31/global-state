import React, { Component } from 'react';

// props ou this.props ?
// ça dépend du "type" (classe ou fonction) de composant
// ici TodoItem reçoit ses props directement en paramètre
// 
class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: false
        };
    }

    // Gestionnaire d'évènement = event handler
    toggleCompleted = () => {
        this.setState({
            completed: !this.state.completed
        });
    }
    render() {
        return (
            <div className="TodoItem">
                <input
                    type="checkbox"
                    checked={this.state.completed}
                    onChange={this.toggleCompleted}
                />
                <span>{this.props.title}</span>
            </div>
        );
    }
}

export default TodoItem;
