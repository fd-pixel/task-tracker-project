import React, { useState } from "react";
import Task from "./Task";

const Tasks = ({ tasks, deleteTask, toggleDone }) => {
  return (
    <div>
      {tasks.map((task) => (
        <h3>
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleDone={toggleDone}
          />
        </h3>
      ))}
    </div>
  );
};

export default Tasks;
