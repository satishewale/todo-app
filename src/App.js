import React, { Component } from "react";
import Header from "./components/header";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listOfTodos: []
    };
  }

  getInitialState() {
    return {
      listOfTodos: []
    };
  }

  addToDo(todo) {
    const newTodo = {
      name: todo,
      completed: false,
      selected: false
    };

    this.setState({
      listOfTodos: [...this.state.listOfTodos, newTodo]
    });
  }
  render() {
    return (
      <div className="container">
        <h2>Todos</h2>
        <div className="panel panel-default">
          <div className="panel-heading">
            <Header addToDo={this.addToDo.bind(this)} />
          </div>
          <div className="panel-body">
            <ul className="list-group">
              {this.state.listOfTodos.map((value, index) => {
                return (
                  <li key={index} className="list-group-item">
                    <input type = "checkbox"/>
                    {value.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
