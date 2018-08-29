import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

let TodoForm = props => {
  const { handleSubmit } = props;
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-group">
        <Field
          name="task"
          id="task"
          component="input"
          type="text"
          className="form-input"
          placeholder="Task"
        />
        <button className="btn btn-primary input-group-btn">Submit</button>
      </div>
    </form>
  );
};
TodoForm = reduxForm({
  form: "todoForm"
})(TodoForm);
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
