import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
    }
    handleChange = event => {
        this.setState({
            title: event.target.value
        });
    }

    handleSubmit = event => {
        // Empêche de sortir de la page
        event.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }
    render() {
        return (
            <form
                className="TodoForm"
                onSubmit={this.handleSubmit}
            >
                <input
                    value={this.state.title}
                    type="text"
                    onChange={this.handleChange}
                />

                <input
                    type="submit"
                    value="Ajouter"
                />
            </form>
        );
    }
}

export default TodoForm;
