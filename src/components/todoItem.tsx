import React from 'react';
import '../styles/todoItem.css'

interface TodoItemProps {
  todo: {
    id: number;
    title: string;
    completed: boolean;
  };
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <li className={todo.completed ? "completed" : ""}>
      <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />

      <label>{todo.title}</label>

      <button className="buttonRemove" onClick={() => removeTodo(todo.id)}>
        X
      </button>
    </li>
  );
};

export default TodoItem;