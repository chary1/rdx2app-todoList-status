import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo, deleteTodo, todoStatus } from "../stores/actions";
function TodoList(props) {
  const [task, setTask] = useState({
    name: "",
    status: false,
    id: uuid(),
  });
  const [filteredtodo, setFilteredtodo] = useState([]);
  const [filteredkey, setFilteredkey] = useState("all");

  useEffect(() => {}, []);
  useEffect(() => {});
  useEffect(() => {
    console.log(props.todos.todos);

    if (filteredkey === "all") {
      setFilteredtodo(props.todos.todos);
    }
    if (filteredkey === "completed") {
      var temp1 = props.todos.todos.filter((todo) => {
        return todo.status === true;
      });
      setFilteredtodo([...temp1]);
    }
    if (filteredkey === "notcompleted") {
      var temp2 = props.todos.todos.filter((todo) => {
        return todo.status === false;
      });
      setFilteredtodo([...temp2]);
    }
  }, [props.todos, filteredkey]);

  const handleStatusChange = (e) => {
    setFilteredkey(e.target.value);
  };

  const inputTextValue = (e) => {
    //console.log(e.target.value);
    setTask({ ...task, name: e.target.value });
  };

  const addTaskButton = (task) => {
    props.dispatch(addTodo(task));
  };

  const deleteButton = (task) => {
    props.dispatch(deleteTodo(task));
  };

  const statusButton = (status) => {
    console.log(status);
    props.dispatch(todoStatus(status));
  };

  return (
    <div className="border">
      {/* Add Form  */}
      <input type="text" onChange={inputTextValue} />
      <button onClick={() => addTaskButton(task)}>Add</button>
      {/* {task.name} - {task.status} */}

      {/* Count  */}
      <h2>Todos List count : {filteredtodo && filteredtodo.length} </h2>

      {/* Filters by using radio buttons  */}
      <div>
        <input
          type="radio"
          name="filteredName"
          value="all"
          onChange={handleStatusChange}
        />
        All
        <input
          type="radio"
          name="filteredName"
          value="completed"
          onChange={handleStatusChange}
        />
        Completed
        <input
          type="radio"
          name="filteredName"
          value="notcompleted"
          onChange={handleStatusChange}
        />
        Not Completed
      </div>
      {filteredtodo &&
        filteredtodo.map((todo, i) => {
          return (
            <div>
              <li
                key={i}
                className={todo.status ? "completed" : "notcompleted"}
              >
                {todo.name}
                <button onClick={() => deleteButton(todo)}>Delete</button>
                {todo.status === false && (
                  <button onClick={() => statusButton(todo)}>Done</button>
                )}
                {todo.status === true && (
                  <button onClick={() => statusButton(todo)}>Undo</button>
                )}
              </li>
            </div>
          );
        })}
    </div>
  );
}

export default connect(function (store) {
  return store;
})(TodoList);
