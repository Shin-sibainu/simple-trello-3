import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { TaskCard } from "./TaskCard";

const reorder = (list, startIndex, endIndex) => {
  const remove = list.splice(startIndex, 1);
  list.splice(endIndex, 0, remove[0]);
};

export const TaskCards = ({ taskList, setTaskList }) => {
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    reorder(
      taskList,
      result.source.index, //ドラッグ開始配列インデックス
      result.destination.index
    ); //ドラッグ目的先終了インデックス);
    setTaskList(taskList);
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="drappable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <TaskCard
                  key={index}
                  task={task}
                  index={index}
                  setTaskList={setTaskList}
                  taskList={taskList}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
