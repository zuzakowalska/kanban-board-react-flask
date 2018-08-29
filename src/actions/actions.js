import { ADD_TODO } from "./action-types";

export const addTodo = todo => ({ type: ADD_TODO, payload: todo });
