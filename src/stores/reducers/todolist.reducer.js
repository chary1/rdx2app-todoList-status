import { v4 as uuid } from "uuid";

const initialState = {
  todos: [
    {
      name: "swimming",
      status: true,
      id: uuid(),
    },
    {
      name: "gym",
      status: false,
      id: uuid(),
    },
    {
      name: "read",
      status: true,
      id: uuid(),
    },
    {
      name: "sleep",
      status: false,
      id: uuid(),
    },
  ],
};

const todoListReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, payload] };
    case "DELETE_TODO":
      var temp = [...state.todos];
      //   var removeIndex = temp.findIndex((todo) => todo.id === payload.id);
      //   console.log(removeIndex);
      //   if (temp.indexOf(-1)) {
      //     temp.splice(removeIndex, 1);
      //   }
      //   return { ...state, todos: [...temp] };

      const temp_arry = temp.filter(function (el) {
        if (el.id !== payload.id) {
          return true;
        } else {
          return false;
        }
      });
      return { ...state, todos: [...temp_arry] };

    case "TODO_STATUS":
      var temp1 = [...state.todos];
      var newArray = temp1.map((todo) => {
        if (todo.id === payload.id) {
          todo.status = !todo.status;
          return todo;
        } else {
          return todo;
        }
      });
      console.log(newArray);

      return { ...state, todos: [...newArray] };
    default:
      return state;
  }
};
export default todoListReducer;
