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
    <li className={todo.completed ? 'completed' : ''}>
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <label>{todo.title}</label>
        <button className='butaoRemove' onClick={() => removeTodo(todo.id)}>Remove</button>
      </div>
    </li>
  );
};

export default TodoItem;
