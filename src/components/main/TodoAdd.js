import React, { Component } from "react";
import TodoForm from "../TodoForm";

class TodoAdd extends Component {
  render() {
    return (
      <div className="TodoAdd column col-7">
        <div className="panel">
          <div className="panel-header">Add Todo</div>
          <div className="panel-body">
            <TodoForm onSubmit={this.props.handleSubmit} />
          </div>
          <div className="panel-footer" />
        </div>
      </div>
    );
  }
}

export default TodoAdd;
