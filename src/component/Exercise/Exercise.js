import React, { useEffect, useState } from "react";
import "./Exercise.css";
import Tool from "../Tool/Tool";

const Exercise = () => {
  const [tools, setTools] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("tools.json")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  const handleAddToList = (tool) => {
    console.log(tool);
    const newList = [...list, tool];
    setList(newList);
  };

  let total = 0;
  for (const tool of list) {
    total = total + parseFloat(tool.price);
  }
  return (
    <div className="exercise-container">
      <div className="tools-container">
        {tools.map((tool) => (
          <Tool
            key={tool.id}
            tool={tool}
            handleAddToList={handleAddToList}
          ></Tool>
        ))}
      </div>
      <div className="profile-wrapper">
        <h3>Tanvir Ahmed</h3>
        <p>Dhaka, Bangladesh</p>
        <h2>Add A Break</h2>
        <div className="break-sedule">
          <p>
            10 <span>s</span>
          </p>
          <p>
            20 <span>s</span>
          </p>
          <p>
            30 <span>s</span>
          </p>
          <p>
            40 <span>s</span>
          </p>
        </div>
        <h2>Exercise Details</h2>
        <div className="exercise-time">
          <p>Exercise time</p>
          <p>
            {total} {/* 0<small>Seconds</small> */}
          </p>
        </div>
        <div className="break-time">
          <p>Break time</p>
          <p>
            0<small>Seconds</small>
          </p>
        </div>
        <button className="activity-btn">Activity Completed</button>
      </div>
    </div>
  );
};

export default Exercise;
