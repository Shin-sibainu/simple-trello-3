import React from "react";

export const TaskCards = ({ taskList }) => {
  return (
    <div>
      <div className="cardArea">
        {/* これを繰り返し表示させる */}
        {taskList.map((task) => (
          <div className="cardBox" key={task.id}>
            <p className="cardText">{task}</p>
            <button>
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
