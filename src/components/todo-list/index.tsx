'use client';
import React, { useCallback } from 'react';

const TodoList = () => {
  const [todos, setTodos] = React.useState<string[]>([]);
  const [newTodo, setNewTodo] = React.useState<string>('');

  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, newTodo]);
    setNewTodo('');
  }, [newTodo]);

  const removeTodo = useCallback((index: number) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewTodo(e.target.value);
    },
    [],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && newTodo.trim()) {
        addTodo();
      }
    },
    [addTodo, newTodo],
  );

  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Add a new todo"
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        value={newTodo}
        aria-label="New todo input"
        data-testid="todo-input"
      />
      <button onClick={addTodo} aria-label="Add todo">
        Add
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="flex justify-between">
            <span>{todo}</span>
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
