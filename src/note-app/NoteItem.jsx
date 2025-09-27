import React, { useMemo } from "react";
import { useState } from "react";

function NoteItem({ note, deleteNotes, editNote }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(note.text);
  

  const handleCancel = () => {
    setIsEditing(false);
    setNewText("");
  };

  const handleSave = () => {
    if (newText.trim() === "") return;
    editNote(note.id, newText);
    setIsEditing(false);
    setNewText("");
  };

  
  return (
    <div className="flex flex-col justify-start mt-5">
      {isEditing ? (
        <div className="flex justify-between w-2/3">
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="border-2 border-gray-300 p-2 rounded-md"
          />

          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="w-16 bg-green-600 rounded-md text-white"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="w-16 bg-red-600 rounded-md text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-between shadow-md p-6 rounded-md w-96 my-2">
          <span>{note.text}</span>
          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="w-16 bg-green-600 rounded-md text-white"
            >
              Edit
            </button>

            <button
              onClick={() => deleteNotes(note.id)}
              className="w-16 bg-red-600 rounded-md text-white"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NoteItem;
