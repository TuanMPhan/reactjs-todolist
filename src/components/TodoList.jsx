import TodoCard from "./TodoCard";
import propTypes from 'prop-types'
function TodoList(props) {
    const {todos} = props;
  return (
    <div>
      <ul className="main">
        {todos.map((todo, index) => (
          <TodoCard {...props} key={index} index={index}>
            <p>{todo}</p>
          </TodoCard>
        ))}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
    todos: propTypes.array
}
export default TodoList;
