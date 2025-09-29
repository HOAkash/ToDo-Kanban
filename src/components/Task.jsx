import React from 'react';

export default function Task({ task, sourceCol }) {
  const dragStart = (e) => {
    e.dataTransfer.setData("task", task);
    e.dataTransfer.setData("sourceCol", sourceCol);
  };

  return (
    <div className="task" draggable onDragStart={dragStart}>
      {task}
    </div>
  );
}