import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            done: false,
        }
    }

/*changeTitle = (event) => {
    console.dir(event.target.value);
    this.setState({ title: event.target.value });
}

changeDescription = (event) => {
    this.setState({ description: event.target.value});
}

changeDone = (event) => {
    this.setState({done: event.target.checked})
}*/
handleChange = (event) => {
    console.log("event", event)
    const { value, name, checked } = event.target;
    const newValue = name === "done" ? checked : value;
    this.setState({ [name]: newValue });
}

handleSubmit = (event) => {
    event.preventDefault();
    this.props.createTask(this.state);
}

 render() {
  return (
   <form onSubmit={this.handleSubmit}>
    <fieldset>
     <label htmlFor="Title">Title</label>
     <input
        id="title"
        name="title"
        type="text"
        onChange={this.handleChange}
        value={this.state.title}
     />
    </fieldset>
    <fieldset>
        <label htmlFor="description">Description</label>
        <textarea
            id="description"
            name="description"
            onChange={this.handleChange }
            value={this.state.description}
     />
    </fieldset>
    <fieldset>
        <label htmlFor="done">Done</label>
        <input
        id="done"
        name="done"
        type="checkbox"
        onChange = { this.handleChange }
        checked = {this.state.done}
    />
    </fieldset>
    <button>Create task</button>
   </form>
  )
 }
}
export default Form;