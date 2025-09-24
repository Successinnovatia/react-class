import React, { useState, useCallback, useEffect } from 'react'
import NoteInput from './NoteInput'
import NoteList from './NoteList'

export default function Note() {
    const [notes, setNotes] = useState(()=>{
        const savedNotes = localStorage.getItem("notes")
        return savedNotes ? JSON.parse(savedNotes) : []
    })


    useEffect(()=>{
        localStorage.setItem("notes", JSON.stringify(notes))
    },[notes])

    const addNote = useCallback((text)=> {
        setNotes((prevNotes)=>{
            return[...prevNotes, {id:Date.now(), text:text}]
        })
    }, [])

   
    const deleteNotes = useCallback((id)=>{
        setNotes((prevNotes)=>{
            const newNotes = prevNotes.filter((note)=>note.id !== id)
            return newNotes
        }, [])
    })

    
    const editNote = useCallback ((id, newText)=>{
        setNotes((prevNotes)=> {
           return prevNotes.map((note)=>{
            return note.id === id ? {...note, text:newText} : note
           }
               
            )
        })

        console.log("Editing note with id:", id, "to new text:", newText);
    })


   
  return (
    <div>
        <h1>Welcome to my Note App</h1>
        <NoteInput addNote={addNote}/>
        <div>
            <NoteList notes={notes} deleteNotes={deleteNotes} editNote={editNote}/>
        </div>
    </div>
  )
}
