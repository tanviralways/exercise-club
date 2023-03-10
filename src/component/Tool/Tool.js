import React from "react";
import "./Tool.css";

const Tool = (props) => {
  const { img, name, details, age, time } = props.tool;
  // let total = 0;
  // for (const tool of list) {
  //   total = total + tool.price;
  // }

  return (
    <div className="tool">
      <img src={img} alt=""></img>
      <div className="tool-info">
        <h2>{name}</h2>
        <p>
          <small>{details}</small>
        </p>
        <h4>For Age: {age}</h4>
        <h4>Time required: {time}</h4>
      </div>
      <button
        onClick={() => props.handleAddToList(props.tool)}
        className="btn-list"
      >
        Add to List
      </button>
    </div>
  );
};

export default Tool;
