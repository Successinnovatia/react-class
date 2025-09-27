import React from 'react'

export default function SearchBar({searchTerm, setSearchTerm}) {
  return (
    <div>
      <input type="text"  placeholder="search notes" onChange={(e)=>setSearchTerm(e.target.value)} value={searchTerm} className="border-2 border-gray-300 p-2 rounded-md w-full "/>
    </div>
  )
}
