import React, { Component } from "react";
import SingleTodo from "../SingleTodo";

class TodoList extends Component {
  renderTodo() {
    const activeTodos = this.props.todos.map(el => {
      return (
        <SingleTodo
          key={el.index}
          id={el.index}
          task={el.task}
          completed={el.completed}
          handleComplete={this.props.handleComplete}
        />
      );
    });
    return activeTodos;
  }

  render() {
    return (
      <div className="TodoList column col-5">
        <div className="panel">
          <div className="panel-header panel-nav">
            <ul className="tab">
              <li className="tab-item active">
                <a
                  href=""
                  className="badge"
                  data-badge={this.renderTodo().length}
                >
                  {" "}
                  Active Todos
                </a>
              </li>
              <li className="tab-item">
                <a href="" className="badge" data-badge="0">
                  Done Todos
                </a>
              </li>
            </ul>
          </div>
          <div className="panel-body">{this.renderTodo()}</div>
          <div className="panel-footer" />
        </div>
      </div>
    );
  }
}

export default TodoList;
