import React, { useState } from 'react';

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const [editing, setEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(task.name);
  const [updatedDescription, setUpdatedDescription] = useState(task.description);

  const handleUpdate = () => {
    updateTask(task.id, { name: updatedName, description: updatedDescription });
    setEditing(false);
  };

  return (
    <li className="task-item">
      {editing ? (
        <>
          <input
            type="text"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
          <textarea
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
        </>
      ) : (
        <>
          <span>{task.name}</span>
          <p>{task.description}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TaskItem;
