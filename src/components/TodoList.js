import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

function TodoList(props) {
  const [task, setTask] = useState({
    name: "swetha",
    status: false,
  });
  const [filteredtodo, setFilteredtodo] = useState([]);
  const [filteredkey, setFilteredkey] = useState("all");

  useEffect(() => {}, []);
  useEffect(() => {});
  useEffect(() => {
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

  const hangeTaskName = (e) => {
    //console.log(e.target.value);
    setTask({ ...task, name: e.target.value });
  };
  const addTodo = () => {
    props.dispatch({ type: "ADD_TODO", payload: task });
  };

  return (
    <div className="border">
      <input type="text" onChange={hangeTaskName} />
      <button onClick={addTodo}>Add</button> {task.name} - {task.status}
      <h2>Todos List </h2>
      <div>
        <input type="radio" name="filteredName" value="all" />
        All
        <input type="radio" name="filteredName" value="completed" />
        Completed
        <input type="radio" name="filteredName" value="notcompleted" />
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
