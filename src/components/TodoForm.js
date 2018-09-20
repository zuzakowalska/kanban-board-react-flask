import React, { Component } from "react";
import { reset, Field, reduxForm } from "redux-form";

class TodoForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <Field
            name="text"
            component="input"
            type="text"
            className="form-input"
            placeholder="Task"
          />
          <button className="btn btn-primary input-group-btn">Submit</button>
        </div>
      </form>
    );
  }
}

const afterSubmit = (result, dispatch) => dispatch(reset("todoForm"));

TodoForm = reduxForm({
  form: "todoForm",
  onSubmitSuccess: afterSubmit
})(TodoForm);

export default TodoForm;
