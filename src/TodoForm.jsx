import { useRef, useState } from 'react';

function TodoForm({ onAddTodo }) {
  const inputRef = useRef();

  const [workingTodoTitle, setWorkingTodoTitle] = useState('');

  const handleAddTodo = (event) => {
    event.preventDefault();

    onAddTodo(workingTodoTitle);

    setWorkingTodoTitle('');

    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Todo</label>

      <input
        ref={inputRef}
        type="text"
        id="todoTitle"
        name="todoTitle"
        placeholder="Todo text"
        value={workingTodoTitle}
        onChange={(event) => setWorkingTodoTitle(event.target.value)}
      />

      <button
        type="submit"
        disabled={!workingTodoTitle.trim()}
      >
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;





//function TodoForm() {

/* function TodoForm({ onAddTodo }) {
  return (

    
  
    <form>
      <label htmlFor="todoTitle">Todo</label>
      <input type="text" id="todoTitle" />
      <button type="submit" disabled>Add Todo</button>
    </form>
  );
};
*/