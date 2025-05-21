import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Dummy() {
  const [task, setTask] = useState([])
  const [todo,setTodo] = useState('')

  const addTask = ()=>{
    if (todo.trim() === "") return;
    const newTask = { id: Date.now(), text: todo, completed: false };
    setTask((prevTasks) => [...prevTasks, newTask]);
  }
  const markAsDone = (id) => {
      setTask((prevTasks) =>
      prevTasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  );
  }

  const deleteTask = (id) => {
 setTask((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }  
  return (
    <>
    <h1>Todoist</h1> 
    <input type="text" placeholder = "Enter your Task" value={todo} onChange={(e) => setTodo(e.target.value)}/>
    <button onClick={addTask}>Add Task </button>
    
<ul>
  {task.length > 0 ? (
    task.map((task) => (
      <li
        key={task.id}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "10px",
        }}
      >
        <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          {task.text}
        </span>
        <button onClick={() => markAsDone(task.id)}>
          {task.completed ? "Undo" : "Mark as Done"}
        </button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </li>
    ))
  ) : (
    <p>No tasks yet</p>
  )}
</ul>


    </>
  )
}

export default Dummy
