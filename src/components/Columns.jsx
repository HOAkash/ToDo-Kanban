import React from "react";
import { useBoard } from "./BoardContext";
import Task from "./Task";

export default function Column({ column }) {
  const { dispatch } = useBoard();

  const handleDrop = (e) => {
    const task = e.dataTransfer.getData("task");
    const sourceCol = e.dataTransfer.getData("sourceCol");
    if (task && sourceCol !== column.id) {
      dispatch({ type: "MOVE_TASK", payload: { sourceCol, targetCol: column.id, task } });
    }
  };

  return (
    <div
      className="column"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <h2>{column.title}</h2>
      {column.tasks.map((task) => (
        <Task key={task} task={task} sourceCol={column.id} />
      ))}
    </div>
  );
}