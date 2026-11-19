import TextInputWithLabel from '../shared/TextInputWithLabel';

import { isValidTodoTitle } from '../utils/todoValidation';

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
      <TextInputWithLabel
  elementId="todoTitle"
  labelText="Todo"
  ref={inputRef}
  value={workingTodoTitle}
  onChange={(event) => setWorkingTodoTitle(event.target.value)}
/>

      <button
        type="submit"
        //disabled={!workingTodoTitle.trim()}
        disabled={!isValidTodoTitle(workingTodoTitle)}
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