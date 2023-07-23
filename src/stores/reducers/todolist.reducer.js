const initialState = {
  todos: [
    {
      name: "swimming",
      status: true,
    },
    {
      name: "gym",
      status: false,
    },
    {
      name: "read",
      status: true,
    },
    {
      name: "sleep",
      status: false,
    },
  ],
};

const todoListReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, payload] };
    default:
      return state;
  }
};
export default todoListReducer;
