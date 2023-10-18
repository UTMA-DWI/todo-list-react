import { useState, useRef } from "react";
import ListItem from "../components/ListItem";
import { v4 as uuidv4 } from "uuid";

function Todo() {
  // useState -> [state, setState]
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  // Add a new todo
  const addTodo = () => {
    const todoValue = inputRef.current.value;

    const newTodo = { name: todoValue, id: uuidv4(), checked: false };

    setTodos([newTodo, ...todos]);
    inputRef.current.value = "";
  };

  const checkTodo = (id) => {
    // find todo by id
    const todo = todos.find((item) => item.id === id);
    // set checked to true
    todo.checked = !todo.checked;
    // setTodos
    setTodos([...todos]);
  };

  const deleteTodo = (id) => {
    // delete todo by id
    // filter items different to given id
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <input
          ref={inputRef}
          type="text"
          className="rounded-md bg-[#444] p-2"
        />
        <button
          onClick={addTodo}
          className="rounded-md bg-indigo-600 px-4 py-2"
        >
          Add todo
        </button>
      </div>
      <ul className="flex flex-col gap-2">
        {todos.map((item) => {
          return (
            <ListItem
              key={item.id}
              text={item.name}
              onChecked={() => checkTodo(item.id)}
              onDelete={() => deleteTodo(item.id)}
              checked={item.checked}
            />
          );
        })}
      </ul>
      {/* <h2 className="text-3xl font-bold ">Completed todos</h2>
      <ul className="flex flex-col gap-2">
        {completedTodos.map((item) => {
          return (
            <CompletedItem
              key={item.id}
              text={item.name}
              onRestore={() => checkTodo(item.id)}
            />
          );
        })}
      </ul> */}
    </div>
  );
}

export default Todo;
