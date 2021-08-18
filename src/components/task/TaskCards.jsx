import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export const TaskCards = ({ taskList, setTaskList }) => {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((e) => e.id !== id));
  };

  return (
    <div>
      <DragDropContext>
        <Droppable droppableId="characters">
          {(provided) => (
            <div
              className="characters"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {taskList.map((task) => (
                <Draggable key={task.id} draggableId={task.id} index={task.id}>
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
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
