import React from "react";
import { useState } from "react";
import { AddNextListButton } from "../button/AddNextListButton";
import { Task } from "./Task";

export const TaskBoxes = () => {
  const [taskBoxList, setTaskBoxList] = useState([
    {
      id: 0,
    },
  ]);

  return (
    <div className="taskArea">
      {taskBoxList.map((taskBox) => (
        <Task
          key={taskBox.id}
          setTaskBoxList={setTaskBoxList}
          taskBoxList={taskBoxList}
          taskBox={taskBox}
        />
      ))}
      <AddNextListButton
        taskBoxList={taskBoxList}
        setTaskBoxList={setTaskBoxList}
      />
    </div>
  );
};
