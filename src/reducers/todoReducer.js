import { ADD_TODO, REMOVE_TODO, MARK_DONE, REMOVE_ALL } from '../actions/types';
import newId from '../utils/newid';

export default (
  state = {
    active: [
      { id: newId(), body: 'Clean room' },
      { id: newId(), body: 'Study' },
      { id: newId(), body: 'Buy groceries' },
    ],
    done: [
      { id: newId(), body: 'Clean room' },
      { id: newId(), body: 'Study' },
      { id: newId(), body: 'Buy groceries' },
    ],
  },
  action
) => {
  console.log(state);
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        active: [...state.active, { id: newId(), body: action.payload }],
      };
    case REMOVE_TODO:
      let active = [...state.active].filter(
        (todo) => todo.id !== action.payload
      );
      let done = [...state.done].filter((todo) => todo.id !== action.payload);
      return { ...state, active, done };
    case MARK_DONE:
      let selectedTask;
      let updatedActive;
      let updatedDone;
      if (state.active.find((todo) => todo.id === action.payload)) {
        selectedTask = [...state.active].filter(
          (todo) => todo.id === action.payload
        );
        updatedActive = [...state.active].filter(
          (todo) => todo.id !== action.payload
        );
        updatedDone = [...state.done, ...selectedTask];
      } else {
        selectedTask = [...state.done].filter(
          (todo) => todo.id === action.payload
        );
        updatedDone = [...state.done].filter(
          (todo) => todo.id !== action.payload
        );
        updatedActive = [...state.active, ...selectedTask];
      }
      return { ...state, active: updatedActive, done: updatedDone };
    case REMOVE_ALL:
      return { active: [], done: [] };
    default:
      return state;
  }
};
