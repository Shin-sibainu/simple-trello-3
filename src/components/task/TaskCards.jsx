import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export const TaskCards = ({ taskList, setTaskList }) => {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((e) => e.id !== id));
  };

  const reorder = (list, startIndex, endIndex) => {
    const remove = list.splice(startIndex, 1);
    list.splice(endIndex, 0, remove[0]);
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    reorder(taskList, result.source.index, result.destination.index);
    setTaskList(taskList);
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="drappable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task) => (
                <Draggable
                  key={task.id}
                  draggableId={task.draggableId}
                  index={task.id}
                >
                  {(provided) => (
                    <div
                      className="cardBox"
                      key={task.id}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <p className="cardText">{task.text}</p>
                      <button onClick={() => handleDelete(task.id)}>
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
