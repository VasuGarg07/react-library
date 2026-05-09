import React from 'react'
import { TodoProvider } from './TodoContext'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

const TodoMain = () => {
  return (
    <TodoProvider>
      <TodoInput />
      <TodoList />
    </TodoProvider>
  )
}

export default TodoMain