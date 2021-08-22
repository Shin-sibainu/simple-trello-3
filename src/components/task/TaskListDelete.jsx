import React from "react";

export const TaskListDelete = ({ setTaskBoxList, taskBoxList, taskBox }) => {
  const handleTaskListDelete = (id) => {
    setTaskBoxList(taskBoxList.filter((e) => e.id !== id));
  };

  return (
    <div>
      <button
        className="taskListDeleteButton"
        onClick={() => handleTaskListDelete(taskBox.id)}
      >
        <i class="fas fa-times"></i>
      </button>
    </div>
  );
};
