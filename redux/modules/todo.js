export const constants = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  COMPLETE_TODO: 'COMPLETE_TODO',
};

let nextTodoId = 0;

export const actions = {
  addTodo ({ name, tag, date }) {
    return {
      type: constants.ADD_TODO,
      itemToAdd: {
        checked: false,
        id: nextTodoId++,
        name,
        tag,
        date,
      },
    };
  },

  removeTodo (id) {
    return {
      type: constants.REMOVE_TODO,
      id,
    };
  },

  addCompletedTodo (item) {
    return {
      type: constants.COMPLETE_TODO,
      item,
    };
  },
};

export const initialState = {
  todos: [],
  completedTodos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          action.itemToAdd,
        ],
      };

    case constants.REMOVE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((item) => item.id !== action.id)],
      };

    case constants.COMPLETE_TODO:
      return {
        ...state,
        ...action.item.checked = !action.item.checked,
        completedTodos: [
          ...state.todos.filter((item) => item.checked === true),
        ],
      };

    default:
      return state;
  }
};
