import React from "react";
import NoteItem from "./NoteItem";

export default function NoteList({ notes, deleteNotes, editNote }) {
  console.log("Rendering NoteList with notes:", notes);
  return (
    <div>
      {notes.length === 0 ? (
        <p>No notes available</p>
      ) : (
        notes.map((note) => {
          return (
            <ul key={note.id}> 
              <NoteItem
                note={note}
                deleteNotes={deleteNotes}
                editNote={editNote}
              />
            </ul>
          );
        })
      )}
    </div>
  );
}
