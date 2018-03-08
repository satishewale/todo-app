import React, { Component } from "react";

class Header extends Component {
  
  // constructor(props) {
  //   super(props);
  // }

  _handleKeyPress(event) {
    if(event.key === "Enter"){
      console.log("Enter", this.props);
      this.props.addToDo(event.target.value);
    }
  }

  render() {
    console.log("---", this.props);
    return (
      <div className="header">
        <input
          type="text"
          className="new-todo form-control"
          placeholder="What needs to be done?"
          onKeyPress={this._handleKeyPress.bind(this)}
        />
      </div>
    );
  }
}

export default Header;
