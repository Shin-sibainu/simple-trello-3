import React from "react";

export const FormInput = (props) => {
  const { setInputText, inputText, setTaskList, taskList } = props;

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText === "") {
      return;
    }
    //タスク配列に追加する。
    setTaskList([
      ...taskList,
      {
        text: inputText,
        id: taskList.length,
        draggableId: `task${taskList.length}`,
      },
    ]);
    setInputText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="taskCardInput"
          type="text"
          placeholder="add a task"
          value={inputText}
          onChange={handleInput}
        />
      </form>
    </div>
  );
};
