import React, { useState } from "react";
import { FormInput } from "../input/FormInput";
import { TaskCards } from "./TaskCards";
import { TaskListDelete } from "./TaskListDelete";
import { TaskTitle } from "./TaskTitle";

export const Task = ({ setTaskBoxList, taskBox, taskBoxList }) => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="taskBox">
      <div className="taskTitleArea">
        <TaskTitle />
        <TaskListDelete
          setTaskBoxList={setTaskBoxList}
          taskBox={taskBox}
          taskBoxList={taskBoxList}
        />
      </div>
      <FormInput
        setInputText={setInputText}
        inputText={inputText}
        setTaskList={setTaskList}
        taskList={taskList}
      />
      <TaskCards taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};
