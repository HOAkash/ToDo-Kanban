import React, { useState } from "react";
import { useBoard } from "./BoardContext";

export default function TrashBin() {
  const { dispatch } = useBoard();
  const [showConfirm, setShowConfirm] = useState(false);
  const [pendingTask, setPendingTask] = useState(null);
  const [sourceCol, setSourceCol] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const task = e.dataTransfer.getData("task");
    const col = e.dataTransfer.getData("sourceCol");

    if (task && col) {
      setPendingTask(task);
      setSourceCol(col);
      setShowConfirm(true);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const confirmDelete = () => {
    dispatch({ type: "DELETE_TASK", payload: { sourceCol, task: pendingTask } });
    setShowConfirm(false);
    setPendingTask(null);
    setSourceCol(null);
  };

  const cancelDelete = () => {
    setShowConfirm(false);
    setPendingTask(null);
    setSourceCol(null);
  };

  return (
    <>
      <div
        className="trash-bin"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <p>Drop here to delete</p>
      </div>

      {showConfirm && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Confirm Deletion</h3>
            <p>Are you sure you want to delete: "{pendingTask}"?</p>
            <div className="modal-actions">
              <button className="confirm-btn" onClick={confirmDelete}>
                Yes, Delete
              </button>
              <button className="cancel-btn" onClick={cancelDelete}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
