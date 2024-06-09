// Dans TaskForm.js
import React, { useState } from 'react';


const TaskForm = ({ addTask }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) {
      setError('Please fill out all fields');
      return;
    }
    addTask({ id: Date.now(), name, description });
    setName('');
    setDescription('');
    setError('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="taskName" className="input-label">
          Task Name
        </label>
        <input
          type="text"
          id="taskName"
          className="input-field"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="taskDesc" className="input-label">
          Task Description
        </label>
        <textarea
          id="taskDesc"
          className="input-field"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      {error && <div className="input-error">{error}</div>}
      <button type="submit" className="btn-submit">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
