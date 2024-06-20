import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from './components/todoItem';
import './styles/app.css'

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/EnkiGroup/DesafioReactFrontendJunior2024/todos')
      .then(response => setTodos(response.data))
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  const addTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTodo.trim()) {
      const newTask: Todo = {
        id: Date.now(),
        title: newTodo.trim(),
        completed: false,
      };
      setTodos([newTask, ...todos]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  return (
    <div className="todo-app">
      <header>
        <h1>Todos</h1>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={addTodo}
        />
      </header>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
        ))}
      </ul>
      <footer>
        <span>{todos.filter(todo => !todo.completed).length} items left</span>
        <button onClick={clearCompleted}>Clear completed</button>
      </footer>
    </div>
  );
};

export default App;
