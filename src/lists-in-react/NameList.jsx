import React from "react";
import { useState } from "react";

//Array of names
const names = ["Alice", "Bob", "Charlie", "David"];

//Object with details
// const details = {
//   id: 1,
//   name: "John Doe",
//   age: 30,
//   profession: "Software Engineer",
// };



export default function NameList() {
  return <div>
    <h2>List of Names</h2>
   <ul>
    {names.map((name, index)=>
    {
        return <li key={index}>{name}</li>
    })}
   </ul>

  
  </div>;
}
