import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";

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
      var temp = props.todos.todos.filter((todo) => {
        return todo.status === true;
      });
      setFilteredtodo([...temp]);
    }
    if (filteredkey === "notcompleted") {
      var temp = props.todos.todos.filter((todo) => {
        return todo.status === false;
      });
      setFilteredtodo([...temp]);
    }
  }, [props.todos, filteredkey]);

  const handleStatusChange = (e) => {
    setFilteredkey(e.target.value);
  };

  const hangeTaskName = (e) => {
    //console.log(e.target.value);
    setTask({ ...task, name: e.target.value });
  };
  const addTodo = () => {
    props.dispatch({ type: "ADD_TODO", payload: task });
  };

  const deleteTodo = (task) => {
    console.log(task);
    props.dispatch({ type: "DELETE_TODO", payload: task });
  };

  const todoStatus = (status) => {
    console.log(status);
    props.dispatch({ type: "TODO_STATUS", payload: status });
  };

  return (
    <div className="border">
      <input type="text" onChange={hangeTaskName} />
      <button onClick={addTodo}>Add</button> {task.name} - {task.status}
      <h2>Todos List count : {filteredtodo && filteredtodo.length} </h2>
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
                <button onClick={() => deleteTodo(todo)}>Delete</button>
                {todo.status === false && (
                  <button onClick={() => todoStatus(todo)}>Done</button>
                )}
                {todo.status === true && (
                  <button onClick={() => todoStatus(todo)}>Undo</button>
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
