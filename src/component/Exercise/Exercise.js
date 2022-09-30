import React, { useEffect, useState } from "react";
import "./Exercise.css";
import Tool from "./Tool/Tool";
const Exercise = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("tools.json")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div className="exercise-container">
      <div className="tools-container">
        {tools.map((tool) => (
          <Tool key={tool.id} tool={tool}></Tool>
        ))}
      </div>
      <div className="profile-wrapper">
        <h3>Tanvir Ahmed</h3>
        <p>Dhaka, Bangladesh</p>
        <h1>Add A Break</h1>
        <div className="break-time">
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
      </div>
    </div>
  );
};

export default Exercise;
