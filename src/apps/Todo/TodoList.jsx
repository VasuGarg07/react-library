import React from 'react'
import { useTodos } from './TodoContext'

const TodoList = () => {
    const {todos, removeTodo, markStatus} = useTodos();

    const handleChange = (item) => {
        markStatus(item.id, !item.completed)
    }
  return (
    todos.map(item => (
        <div key={item.id} style={{display:"flex", gap:8, alignContent:"center"}}>
            <input
                type='checkbox'
                style={{width:'fit-content',padding:"0"}}
                onChange={(e) => handleChange(item)}
            />
            <p style={{margin:0,
                textDecoration: item.completed ? "line-through" : ""
            }}>{item.task}</p>
            <button onClick={() => removeTodo(item.id)}>Del</button>
        </div>
    )) 
  )
}

export default TodoList