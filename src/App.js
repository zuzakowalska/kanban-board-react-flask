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
      completeTodo: actions.completeTodo,
      deleteTodo: actions.deleteTodo,
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
    this.handleFilter = this.handleFilter.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(data) {
    this.props.addTodo(data);
  }
  handleComplete(index) {
    this.props.completeTodo(index);
  }
  handleFilter(filter) {
    this.props.setCompleteFilter(filter);
  }
  handleDelete(index) {
    this.props.deleteTodo(index);
  }
  getVisibleTodos(filter) {
    // eslint-disable-next-line
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
              handleDelete={this.handleDelete}
              handleFilter={this.handleFilter}
              done={this.getVisibleTodos("SHOW_COMPLETED")}
              active={this.getVisibleTodos("SHOW_ACTIVE")}
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
