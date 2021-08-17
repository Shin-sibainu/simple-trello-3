import React from "react";
import { FormInput } from "../input/FormInput";
import { TaskCards } from "./TaskCards";

export const Task = () => {
  return (
    <div className="taskArea">
      <div className="taskBox">
        <FormInput />
        <TaskCards />
      </div>
    </div>
  );
};
