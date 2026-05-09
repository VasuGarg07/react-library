import React, { useState } from 'react'
import { useTodos } from './TodoContext'

const TodoInput = () => {
    const { addTodo } = useTodos();
    const [task, setTask] = useState("");

    const handleAdd = (e) => {
        e.preventDefault();
        addTodo(task);
        setTask("")
    }

    return (
            <form onSubmit={handleAdd} style={{marginBottom: 8, display:"flex", gap:8, maxWidth:600}}>
                <input 
                    type='text'
                    placeholder='Enter task...'
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button type='submit'>Add</button>
            </form>
    )
}

export default TodoInput