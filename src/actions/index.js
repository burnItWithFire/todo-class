import { ADD_TODO, REMOVE_TODO, MARK_DONE, REMOVE_ALL } from './types';

export const addTodo = (input) => {
  return { type: ADD_TODO, payload: input };
};

export const removeTodo = (id) => {
  return { type: REMOVE_TODO, payload: id };
};

export const markAsDone = (id) => {
  return { type: MARK_DONE, payload: id };
};

export const removeAll = () => {
  return { type: REMOVE_ALL };
};
