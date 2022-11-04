import React from "react";
import "./AddForm.css";

class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.task);
        this.setState({task: ''})
    };

    render() {
        const {task} = this.state;
        return (
            <div className="add-form-wrapper">
                <h3>Добавьте новую задачу</h3>
                <form className="add-form" onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        value={task}
                        onChange={this.onValueChange}
                        className="add-form__input"
                        placeholder="Что необходимо сделать?"
                        name="task"
                        required/>
                    <button
                        type="submit"
                        className="btn btn-dark add-form__button">
                        Добавить
                    </button>
                </form>
            </div>
        );
    }
}

export default AddForm;