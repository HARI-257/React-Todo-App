import { useState , useEffect } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState([])
  const [todo,setTodo] = useState('')

 


  const addTask = ()=>{
    if (todo.trim() === "") return;
    const newTask = {id:Date.now() , text:todo, completed:false}
    setTask((prevTasks) => [...prevTasks, newTask]);
    setTodo("")
  }
  const taskdone = (id) => {
    setTask((prevTasks) =>
      prevTasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
    )
  }

  const deletetask = (id) => {
      setTask((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }  
  return (
    <>
    <h1>Todoist</h1> 
    <input type="text" placeholder = "Enter your Task" value={todo} onChange={(e) => setTodo(e.target.value)}/>
    <button onClick={addTask}>Add Task </button>
    
    
<ul>
  {task.length !== 0 ? (
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
        <button onClick={() => taskdone(task.id)}>
          {task.completed ? "Undo" : "Mark as Done"}
        </button>
        <button onClick={() => deletetask(task.id)}>Delete</button>
      </li>
    ))
  ) : (
    <p>No tasks yet</p>
  )}
</ul>
    </>
  )
}

export default App
