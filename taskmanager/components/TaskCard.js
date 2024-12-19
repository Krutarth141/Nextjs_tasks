'use client';

import { useState } from 'react';
import { FaCheckCircle, FaRegCircle, FaTrashAlt } from 'react-icons/fa';
import styles from '@/styles/taskcard.module.css'; 

const TaskCard = ({ task, setTasks }) => {
  const [status, setStatus] = useState(task.status);

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.id === task.id ? { ...t, status: newStatus } : t
      )
    );
  };

  const handleDeleteTask = () => {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== task.id));
  };

  return (
    <div className={`${styles.taskCard} ${status === 'Completed' ? styles.completed : ''}`}>
      <div className={styles.taskDetails}>
        <div className="status">
          {status === 'Completed' ? (
            <FaCheckCircle className="text-green-500" />
          ) : (
            <FaRegCircle className="text-gray-500" />
          )}
          <h2 className={status === 'Completed' ? 'line-through text-gray-400' : ''}>{task.title}</h2>
        </div>
        <p className={status === 'Completed' ? 'line-through text-gray-400' : ''}>{task.description}</p>
      </div>

      <div className="status">
        <select
          value={status}
          onChange={handleStatusChange}
          className="statusSelect"
        >
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <button onClick={handleDeleteTask} className={styles.deleteButton}>
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default TaskCard;
