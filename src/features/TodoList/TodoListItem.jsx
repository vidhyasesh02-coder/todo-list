/* function TodoListItem({ todo }) {
  return (
    <li>{todo.title}</li>
  );
}

export default TodoListItem; */

import { useState } from 'react';
import TextInputWithLabel from '../../shared/TextInputWithLabel';

import { isValidTodoTitle } from '../../utils/todoValidation';


function TodoListItem({ todo, onCompleteTodo, onUpdateTodo  }) {

 const [isEditing, setIsEditing] = useState(false);
 const [workingTitle, setWorkingTitle] = useState(todo.title);

 const handleEdit = (event) => {
  setWorkingTitle(event.target.value);
};

 const handleCancel = () => {
  setIsEditing(false);
  setWorkingTitle(todo.title);
};

 const handleUpdate = (event) => {
  if (!isEditing) return;

  event.preventDefault();

  onUpdateTodo({ ...todo, title: workingTitle });

  setIsEditing(false);
};
    
return (
  <li>
    <form onSubmit={handleUpdate}>
      {isEditing ? (
        <>
          <TextInputWithLabel
            elementId={`editTodo-${todo.id}`}
            labelText="Edit Todo"
            value={workingTitle}
            onChange={handleEdit}
          />

          <button type="button" onClick={handleCancel}>
            Cancel
          </button>

          <button
            type="submit"
            disabled={!isValidTodoTitle(workingTitle)}
          >
            Update
          </button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => onCompleteTodo(todo.id)}
          />

          <span onClick={() => setIsEditing(true)}>
            {todo.title}
          </span>
        </>
      )}
    </form>
  </li>
);
}
export default TodoListItem;