import React from "react";
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
  }

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div className="flex justify-between border-2 border-gray-300 p-2 rounded-md w-96 my-2">
          <span>{note.text}</span>
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
      )}
    </div>
  );
}

export default NoteItem;
