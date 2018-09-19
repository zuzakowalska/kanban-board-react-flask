import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./reducers/actions";
import { bindActionCreators } from "redux";
import "./scss/App.scss";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/main/TodoList";

const mapStateToProps = state => {
  return {
    todos: state.todos,
    filter: state.filter
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addTodo: actions.addTodo,
      toggleTodo: actions.toggleTodo,
      setCompleteFilter: actions.setCompleteFilter
    },
    dispatch
  );
};

class App extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
  }

  handleSubmit(data) {
    this.props.addTodo(data);
  }

  handleComplete(index) {
    this.props.toggleTodo(index);
  }

  getVisibleTodos(filter) {
    switch (filter) {
      case "SHOW_ACTIVE":
        return this.props.todos.filter(el => !el.completed);
      case "SHOW_COMPLETED":
        return this.props.todos.filter(el => el.completed);
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container grid-lg">
          <div className="columns">
            <div className="TodoAdd column col-7">
              <div className="panel">
                <div className="panel-header">Add Todo</div>
                <div className="panel-body">
                  <TodoForm onSubmit={this.handleSubmit} />
                </div>
                <div className="panel-footer" />
              </div>
            </div>
            <TodoList
              todos={this.getVisibleTodos(this.props.filter)}
              handleComplete={this.handleComplete}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
