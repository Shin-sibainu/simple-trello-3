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
    setTaskList([...taskList, { text: inputText, id: Math.random() * 1000 }]);
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
