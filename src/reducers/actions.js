let nextTodoIndex = 0;
export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const SET_COMPLETE_FILTER = "SET_COMPLETE_FILTER";

export const addTodo = task => {
  return { type: ADD_TODO, task, index: nextTodoIndex++ };
};

export const completeTodo = index => {
  return { type: COMPLETE_TODO, index };
};

export const deleteTodo = index => {
  return { type: DELETE_TODO, index };
};

export const setCompleteFilter = filter => {
  return { type: SET_COMPLETE_FILTER, filter };
};

export const completeFilters = {
  SHOW_ACTIVE: "SHOW_ACTIVE",
  SHOW_COMPLETED: "SHOW_COMPLETED"
};
