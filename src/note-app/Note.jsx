import React, { useState, useCallback, useEffect, useMemo } from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

export default function Note() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = useCallback((text) => {
    setNotes((prevNotes) => {
      return [...prevNotes, { id: Date.now(), text: text }];
    });
  }, []);

  const deleteNotes = useCallback((id) => {
    setNotes((prevNotes) => {
      const newNotes = prevNotes.filter((note) => note.id !== id);
      return newNotes;
    }, []);
  });

  const editNote = useCallback((id, newText) => {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        return note.id === id ? { ...note, text: newText } : note;
      });
    });

    console.log("Editing note with id:", id, "to new text:", newText);
  });

  const filteredNotes = useMemo(() => {
    return notes.filter((note) =>
      note.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [notes, searchTerm]);

 
  return (
    <div className="w-[50%] mx-auto my-10 p-5 border-2 border-gray-300 rounded-lg shadow-lg bg-gray-200">
      <h1 className="text-center text-2xl font-bold mb-4">
        Welcome to my Note App
      </h1>
      <NoteInput addNote={addNote} />
      <div className=" mt-2 w-96 mx-auto">
        <input type="text"  placeholder="search notes" onChange={(e)=>setSearchTerm(e.target.value)} value={searchTerm} className="border-2 border-gray-300 p-2 rounded-md w-full "/>
      </div>
      <div>
        <NoteList
          notes={notes}
          deleteNotes={deleteNotes}
          editNote={editNote}
          filteredNotes={filteredNotes}
        />
      </div>
    </div>
  );
}
