import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions/actions";
import { bindActionCreators } from "redux";
import "./scss/App.scss";
import TodoAdd from "./components/main/TodoAdd";
import TodoList from "./components/main/TodoList";

const mapStateToProps = state => {
  return {
    activeTodos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      AddTodo: actions.addTodo
    },
    dispatch
  );
};

class App extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = this.activeTodos;
  }

  handleSubmit = values => {
    console.log(values);
    this.props.AddTodo(values);
  };
  render() {
    return (
      <div className="App">
        <div className="container grid-lg">
          <div className="columns">
            <TodoAdd handleSubmit={this.handleSubmit} />
            <TodoList activeTodos={this.props.activeTodos} />
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
