import React from "react";

export const AddNextListButton = ({ taskBoxList, setTaskBoxList }) => {
  const handleAddClick = () => {
    //Listを追加する。
    setTaskBoxList([
      ...taskBoxList,
      {
        id: taskBoxList.length,
        draggableId: `taskBox${taskBoxList.length}`,
      },
    ]);
  };

  return (
    <div className="addNextButtonArea">
      <button className="addNextListButton" onClick={handleAddClick}>
        +
      </button>
    </div>
  );
};
