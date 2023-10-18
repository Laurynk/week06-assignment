import { useState } from "react";
import { nanoid } from "nanoid"; //check d2l week5

export default function TaskForm(props) {
  const [title, setTitle] = useState("");

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    //add song to playlist
    e.preventDefault();
    const newTask = {
      title: title,
      played: false,
      id: nanoid()
    };
    props.addTask(newTask);

    //Rest title and artist
    setTitle("");
  }

  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            onChange={handleTitleChange}
            value={title}
            placeholder="Add new task"
          />
        </label>
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
    </div>
  );
}
