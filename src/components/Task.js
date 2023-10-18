import React, { useState } from "react";

export default function Task(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(props.task.title);

  function handleDelete() {
    props.remove(props.task);
  }

  function handleStatusChange() {
    props.toggleCompleted(props.task);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    props.editTitle({ ...props.task, title: editedTitle });
    setIsEditing(false);
  }

  function handleCancelEdit() {
    setEditedTitle(props.task.title);
    setIsEditing(false);
  }

  return (
    <li className="task">
      <div className="task-details">
        {isEditing ? (
          <div>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </div>
        ) : (
          <p>
            <span>
              {props.task.completed === true ? (
                <del>{props.task.title}</del>
              ) : (
                props.task.title
              )}
              <input
                type="checkbox"
                onChange={handleStatusChange}
                value={props.task.completed}
              />
            </span>
          </p>
        )}
      </div>
      <div>
        <button className="delete-btn" onClick={handleDelete}>
          Delete
        </button>
        {isEditing ? (
          <button className="edit-btn" onClick={handleCancelEdit}>
            Cancel
          </button>
        ) : (
          <button className="edit-btn" onClick={handleEdit}>
            Edit
          </button>
        )}
      </div>
    </li>
  );
}
