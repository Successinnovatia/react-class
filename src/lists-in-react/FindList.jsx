import React from "react";

const students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
];

function FindList() {
  const student = students.find((student) => student.id === 2);

  return <div>student name: {student.name}</div>;
}

export default FindList;
