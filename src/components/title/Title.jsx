import React from "react";
import bgImage from "../../images/mountain.jpg";
// eslint-disable-next-line

export const Title = () => {
  return (
    <div className="main-title">
      <h1>Simple Trello</h1>
      <img src={bgImage} alt="mountain" />
    </div>
  );
};
