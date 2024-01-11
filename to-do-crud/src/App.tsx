import React, { useState, useEffect } from 'react';
import './App.css';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  // State for tasks
  const [tasks, setTasks] = useState<Task[]>([]);
  // State for new task input
  const [newTask, setNewTask] = useState<string>('');
  // State for editing task
  const [editingTask, setEditingTask] = useState<number | null>(null);
  // State for edited text during editing
  const [editedTaskText, setEditedTaskText] = useState<string>('');

  // Function to add a new task
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now(), text: newTask.trim(), completed: false },
      ]);
      setNewTask('');
    }
  };

  // Function to delete a task
  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Function to toggle completion status of a task
  const toggleCompleted = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to start editing a task
  const startEditing = (id: number, text: string) => {
    setEditingTask(id);
    setEditedTaskText(text);
  };

  // Function to finish editing a task
  const finishEditing = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, text: editedTaskText } : task
      )
    );
    setEditingTask(null);
    setEditedTaskText('');
  };

  // Effect to persist tasks in local storage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            {editingTask === task.id ? (
              <>
                <input
                  type="text"
                  value={editedTaskText}
                  onChange={(e) => setEditedTaskText(e.target.value)}
                />
                <button onClick={() => finishEditing(task.id)}>Done</button>
              </>
            ) : (
              <>
                {task.text}
                <button onClick={() => startEditing(task.id, task.text)}>
                  Edit
                </button>
                <button onClick={() => toggleCompleted(task.id)}>
                  {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
