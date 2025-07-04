
import React from 'react'
import {useState} from 'react';
import style from "./todoList.module.css"


type Todo = {
  id: number
  text:string;
  completed: boolean;
}

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [inputValue, setInputValue] = useState('')

  const handleAddTodo = () => {
    if (inputValue.trim() !== ''){
      const newTodo:Todo = {
        id:Date.now(),
        text: inputValue,
        completed: false,
      }
      setTodos([...todos, newTodo])
      setInputValue('')
    }
  }

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className={style.app}>
      <h1>Todo List</h1>
      <div className={style.todoForm}>
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="Add a new task..."
          onKeyDown ={e => e.key === 'Enter' && handleAddTodo()}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul className={style.todoList}>
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => handleToggleTodo(todo.id)}>
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList