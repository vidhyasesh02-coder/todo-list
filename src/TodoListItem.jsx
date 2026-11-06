/* function TodoListItem({ todo }) {
  return (
    <li>{todo.title}</li>
  );
}

export default TodoListItem; */

function TodoListItem({ todo, onCompleteTodo }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => onCompleteTodo(todo.id)}
      />
      {todo.title}
    </li>
  );
}
export default TodoListItem;