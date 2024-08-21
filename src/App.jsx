import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    "Go to the gym",
    "Eat more fruits and vege",
    "Pick up the kids from school",
  ]);
  const [todoValue, setTodoValue] = useState("");

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function handleAddTodos(newTodo) {
    if (newTodo.trim() !== "") {
      const newTodoList = [...todos, newTodo];
      persistData(newTodoList);
      setTodos(newTodoList);
    }
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((_, i) => i !== index);
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }

  function moveTodoUp(index) {
    if (index > 0) {
      const updatedTodoList = [...todos];

      [updatedTodoList[index], updatedTodoList[index - 1]] = [
        updatedTodoList[index - 1],
        updatedTodoList[index]
      ];
      setTodos(updatedTodoList);
      persistData(updatedTodoList);
    }
  }
  function moveTodoDown(index) {
    if (index < todos.length - 1) {
      const updatedTodoList = [...todos];

      [updatedTodoList[index], updatedTodoList[index + 1]] = [
        updatedTodoList[index + 1],
        updatedTodoList[index]
      ];
      setTodos(updatedTodoList);
      persistData(updatedTodoList);
    }
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <>
      <TodoInput
        handleAddTodos={handleAddTodos}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
      />
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
        moveTodoUp={moveTodoUp}
        moveTodoDown={moveTodoDown}
      />
    </>
  );
}

export default App;
