import React, { Component } from "react";

class Header extends Component {

  constructor(){
    super();
    this.state = {
      textVal : ''
    };
  }

  _handleOnChange(event) {
    this.setState({
      textVal : event.target.value
    });
  }
  _handleKeyPress(event) {
    if(event.key === "Enter" && event.target.value) {
      this.props.addToDo(event.target.value);
      this.setState({
        textVal : ''
      });
    }
  }

  render() {
    return (
      <div className="header">
        <input
          type="text"
          className="new-todo form-control"
          placeholder="What needs to be done?"
          onKeyPress={this._handleKeyPress.bind(this)}
          onChange={this._handleOnChange.bind(this)}
          value={this.state.textVal}
        />
      </div>
    );
  }
}

export default Header;
