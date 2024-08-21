import propTypes from 'prop-types'

function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;
  return (
    <header>
      <input
        value={todoValue}
        onChange={(event) => {
          setTodoValue(event.target.value);
        }}
        placeholder="Enter todos..."
      ></input>
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}

TodoInput.propTypes = {
    handleAddTodos: propTypes.func,
    todoValue: propTypes.string,
    setTodoValue: propTypes.func
} 
export default TodoInput;
