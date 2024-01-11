import "./App.css";
import React, { useState } from "react";

// Task interface
interface Task {
  id: number;
  text: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  // Add task function
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks((prevTasks) => [
        ...prevTasks,
        {id: Date.now(),
          text:newTask.trim()},
      ]);
      setNewTask('');
    }
  };

  // delete task
  const deleteTask = (id: number) => {

  }

  return (
    <div className="App">
      <h1>To Do List - Azen</h1>
      <div>
        <input type='text' 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} />
        <button onClick={addTask}>Añadir </button>
      </div>
      
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
          </li> ))}
      </ul>

    </div>
  );
};

export default App;
