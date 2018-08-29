import React, { Component } from "react";
import SingleTodo from "../SingleTodo";

class TodoList extends Component {
  render() {
    const { todos } = this.props.activeTodos;
    return (
      <div className="TodoList column col-5">
        <div className="panel">
          <div className="panel-header panel-nav">
            <ul className="tab">
              <li className="tab-item active">
                <a href="" className="badge" data-badge="0">
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
          <div className="panel-body">
            {todos.map((el, index) => (
              <SingleTodo key={index} text={el.task} />
            ))}
          </div>
          <div className="panel-footer" />
        </div>
      </div>
    );
  }
}

export default TodoList;
