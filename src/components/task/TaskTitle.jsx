import React, { useState } from "react";

export const TaskTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputTitle, setInputTitle] = useState("Today");

  const handleClick = () => {
    setIsClick(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  };

  const handleChange = (e) => {
    setInputTitle(e.target.value);
  };

  return (
    <div className="taskTitleInputArea" onClick={handleClick}>
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input
            autoFocus
            type="text"
            placeholder="add a title"
            className="taskTitleInput"
            onBlur={() => setIsClick(false)}
            onChange={handleChange}
            value={inputTitle}
          />
        </form>
      ) : (
        <h3>{inputTitle}</h3>
      )}
    </div>
  );
};
