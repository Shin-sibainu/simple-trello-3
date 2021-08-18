import React, { useState } from "react";
import { FormInput } from "../input/FormInput";
import { TaskCards } from "./TaskCards";

export const Task = () => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="taskBox">
      {/* ここは完了 */}
      <FormInput
        setInputText={setInputText}
        inputText={inputText}
        setTaskList={setTaskList}
        taskList={taskList}
      />
      {/* 次はここから */}
      <TaskCards taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};
