import React, { useState } from "react";

const ToDoItem = ({ task, toggleComplete, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEdit = () => {
    editTask(task.id, editedText);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between p-2 border rounded">
      {isEditing ? (
        <input
          type="text"
          className="border p-1 flex-1"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <span
          className={`flex-1 ${
            task.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {task.text}
        </span>
      )}
      <div className="flex space-x-2">
        {isEditing ? (
          <button onClick={handleEdit} className="text-green-500">
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => toggleComplete(task.id)}
          className="text-yellow-500"
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="text-red-500"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
