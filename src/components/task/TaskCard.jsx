import React from "react";
import { Draggable } from "react-beautiful-dnd";

export const TaskCard = ({ task, index, setTaskList, taskList }) => {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((e) => e.id !== id));
  };

  return (
    <div>
      <Draggable key={task.id} draggableId={task.draggableId} index={index}>
        {(provided) => (
          <div
            className="cardBox"
            key={task.id}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <p className="cardText">{task.text}</p>
            <button
              className="trashButton"
              onClick={() => handleDelete(task.id)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        )}
      </Draggable>
    </div>
  );
};
