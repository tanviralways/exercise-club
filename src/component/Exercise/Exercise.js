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
        <h3>This is for person</h3>
      </div>
    </div>
  );
};

export default Exercise;
