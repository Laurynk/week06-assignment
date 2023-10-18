import React, { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

export default function Tasklist() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
  }

  function removeTask(taskToRemove) {
    const updatedTasks = tasks.filter(function (task) {
      return task.id !== taskToRemove.id;
    });
    setTasks(updatedTasks);
  }

  function toggleCompleted(taskToToggle) {
    const updatedTasks = tasks.map(function (task) {
      if (task.id === taskToToggle.id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function editTaskTitle(updatedTask) {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
  }

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            remove={removeTask}
            toggleCompleted={toggleCompleted}
            editTitle={editTaskTitle} // Pass the editTaskTitle function
          />
        ))}
      </ul>
      <TaskForm addTask={addTask} />
    </div>
  );
}
