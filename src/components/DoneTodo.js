import React, { Component } from "react";

class SingleTodo extends Component {
  render() {
    return (
      <div className="SingleTodo">
        <div className="card">
          <div className="card-body align-center">
            <h4>
              <del className="text-gray">Take out trash</del>
            </h4>
          </div>
          <div className="card-footer">
            <p className="float-left text-primary">Monday</p>
            <button className="btn btn-error float-right">
              <i className="icon icon-delete" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleTodo;
