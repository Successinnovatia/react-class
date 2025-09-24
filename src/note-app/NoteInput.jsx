import React, { useRef} from 'react'

function NoteInput({addNote}) {
    const inputRef = useRef(null)

    const handleAddNote = () => {
        if(inputRef.current.value.trim() === "") return
        const noteText = inputRef.current.value

        addNote(noteText)
        inputRef.current.value = ""
        inputRef.current.focus()

    }

  return (
    <div className='flex justify-center mx-auto'>
        <input type="text" placeholder='enter your note' ref={inputRef} className='border-2 border-gray-300 p-2 rounded-md w-96'/>

        <button onClick={handleAddNote} className='border-2 border-gray-300 w-16 rounded-md bg-blue-700 text-white'>Add Note</button>
    </div>
  )
}

export default NoteInput