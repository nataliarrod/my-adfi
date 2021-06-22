import "./assets/css/App.css";
import React, { Component } from "react";
import Tasks from "./components/Tasks";
import Form from "./components/Form";
import uuid from "uuid-random";

class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
    };
  }

  createTask = (task) => {
    const newTask = {
      id: uuid(),
      ...task,
    };
    this.setState({
      tasks: this.state.tasks.concat(newTask),
    });
  };

  render() {
    return (
      <div>
        <Form createTask={this.createTask} />
        <Tasks tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
