import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { FormInput } from "../input/FormInput";
import { TaskCards } from "./TaskCards";
import { TaskListDelete } from "./TaskListDelete";
import { TaskTitle } from "./TaskTitle";

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",

  // change background colour if dragging
  // background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle,
});

export const Task = ({ setTaskBoxList, taskBox, taskBoxList, index }) => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);

  return (
    <Draggable key={taskBox.id} draggableId={taskBox.draggableId} index={index}>
      {(provided, snapshot) => (
        <div
          key={taskBox.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
          className="taskBox"
        >
          <div className="taskTitleArea" {...provided.dragHandleProps}>
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
      )}
    </Draggable>
  );
};
