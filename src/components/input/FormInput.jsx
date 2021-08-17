import React from "react";

export const FormInput = (props) => {
  const { setInputText, inputText, setTaskList, taskList } = props;

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(...taskList);
    //タスク配列に追加する。
    setTaskList([...taskList, inputText]);
    setInputText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="todo"
          value={inputText}
          onChange={handleInput}
        />
      </form>
    </div>
  );
};
