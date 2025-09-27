import React from "react";
import NoteItem from "./NoteItem";

export default function NoteList({ notes, deleteNotes, editNote, filteredNotes }) {
  console.log("Rendering NoteList with notes:", filteredNotes);
  return (
    <div>
      {filteredNotes.length === 0 ? (
        <p className="text-center mt-10">No notes available...</p>
      ) : (
        filteredNotes.map((note) => {
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
