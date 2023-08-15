export function addTodo(newTaskObj) {
  return { type: "ADD_TODO", payload: newTaskObj };
}

export function deleteTodo(task) {
  return { type: "DELETE_TODO", payload: task };
}

export function todoStatus(status) {
  return { type: "TODO_STATUS", payload: status };
}
