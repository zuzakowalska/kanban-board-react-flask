import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import {
  ADD_TODO,
  SET_COMPLETE_FILTER,
  COMPLETE_TODO,
  DELETE_TODO,
  completeFilters
} from "./actions";
const { SHOW_ACTIVE } = completeFilters;

const completeFilter = (state = SHOW_ACTIVE, action) => {
  switch (action.type) {
    case SET_COMPLETE_FILTER:
      return action.filter;
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          task: action.task,
          completed: false,
          index: action.index
        }
      ];
    case COMPLETE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: true
          });
        }
        return todo;
      });
    case DELETE_TODO:
      return state.filter(todo => todo.index !== action.index);
    default:
      return state;
  }
};

const todoApp = combineReducers({
  todos: todos,
  filter: completeFilter,
  form: formReducer
});

export default todoApp;
