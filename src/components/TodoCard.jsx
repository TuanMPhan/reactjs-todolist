import propTypes from "prop-types";
function TodoCard(props) {
  const {
    children,
    handleDeleteTodo,
    index,
    handleEditTodo,
    moveTodoUp,
    moveTodoDown,
  } = props;
  return (
    <li className="todoItem">
      <div className="moveTodoButtonsContainer">
        <button className="move-button" onClick={() => moveTodoUp(index)}>
          ☝️
        </button>
        <button className="move-button" onClick={() => moveTodoDown(index)}>
          👇
        </button>
      </div>
      {children}
      <div className="actionsContainer">
        <button
          onClick={() => {
            handleEditTodo(index);
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(index);
          }}
        >
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
  handleEditTodo: propTypes.func,
  moveTodoDown: propTypes.func,
  moveTodoUp: propTypes.func,
};
export default TodoCard;
