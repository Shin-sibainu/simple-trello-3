import React from "react";
import { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import { AddNextListButton } from "../button/AddNextListButton";
import { Task } from "./Task";

const reorder = (list, startIndex, endIndex) => {
  const remove = list.splice(startIndex, 1);
  list.splice(endIndex, 0, remove[0]);
};

export const TaskBoxes = () => {
  const [taskBoxList, setTaskBoxList] = useState([
    {
      id: 0,
      draggableId: "taskBox0",
    },
  ]);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    reorder(taskBoxList, result.source.index, result.destination.index);

    setTaskBoxList(taskBoxList);
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="taskArea"
            >
              {taskBoxList.map((taskBox, index) => (
                <Task
                  key={taskBox.id}
                  index={index}
                  setTaskBoxList={setTaskBoxList}
                  taskBoxList={taskBoxList}
                  taskBox={taskBox}
                />
              ))}
              {provided.placeholder}

              <AddNextListButton
                taskBoxList={taskBoxList}
                setTaskBoxList={setTaskBoxList}
              />
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
