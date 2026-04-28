import React from 'react'
import { useToggle } from '../hooks/useToggle'

const ToggleHook = () => {
  const [value, toggle] = useToggle();

  return (
    <button
        onClick={toggle}
        style={{
            width:100,
            color:"white",
            backgroundColor: value ? "#14c50b" : "#e11c1c"
        }}>
        {value ? "ON" : "OFF"}
    </button>
  )
}

export default ToggleHook