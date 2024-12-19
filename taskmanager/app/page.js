'use client';

import { useState, useEffect } from 'react';
import TaskCard from '@/components/TaskCard';
import styles from '../styles/home.module.css';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [isClient, setIsClient] = useState(false); 

  useEffect(() => {
    setIsClient(true); 
  }, []);

  const handleAddTask = () => {
    if (newTitle.trim() && newDescription.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), title: newTitle, description: newDescription, status: 'In Progress' },
      ]);
      setNewTitle('');
      setNewDescription('');
    }
  };

  if (!isClient) {
    return null; 
  }

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageHeader}>Task Manager</h1>
      
     
      <div className={styles.addTaskForm}>
        <h2>Add New Task</h2>
        
 
        <div className="mb-4">
          <label htmlFor="task-title" className="block text-sm font-medium text-gray-700 mb-2">
            Task Title
          </label>
          <input
            id="task-title"
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter task title"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="task-description" className="block text-sm font-medium text-gray-700 mb-2">
            Task Description
          </label>
          <textarea
            id="task-description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter task description"
          />
        </div>

        
        <button
          onClick={handleAddTask}
          className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
        >
          Add Task
        </button>
      </div>

     
      <div className="space-y-4 mt-8">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} setTasks={setTasks} />
        ))}
      </div>
    </div>
  );
}
