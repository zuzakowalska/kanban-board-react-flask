import React, { Component } from "react";

class SingleTodo extends Component {
  render() {
    return (
      <div className="SingleTodo">
        <div className="card">
          <div className="card-body">
            <h4>{this.props.task.text}</h4>
          </div>
          <div className="card-footer">
            <p className="float-left text-primary" />
            <button
              onClick={() => {
                this.props.handleDelete(this.props.id);
              }}
              className="btn btn-error float-right"
            >
              <i className="icon icon-delete" />
            </button>
            <button
              onClick={() => {
                this.props.handleComplete(this.props.id);
              }}
              className="btn btn-success float-right"
            >
              <i className="icon icon-check" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleTodo;
