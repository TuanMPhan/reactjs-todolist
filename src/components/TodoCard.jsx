import propTypes from 'prop-types'
function TodoCard(props) {
  const { children, handleDeleteTodo, index, handleEditTodo } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button onClick={() => {handleEditTodo(index)}} >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => {handleDeleteTodo(index)}}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}

TodoCard.propTypes = {
    children: propTypes.object,
    handleDeleteTodo: propTypes.func,
    index: propTypes.number,
    handleEditTodo: propTypes.func
}
export default TodoCard;
