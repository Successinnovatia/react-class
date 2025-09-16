import React from 'react'

const numbers = [1,2,3,4,5,6,7,8,9,10];

const evenNumbers = numbers.filter(num => num % 2 === 0 );

const students = [
    {id:1, name:"Alice", score:85},
    {id:2, name:"Bob", score:92},
    {id:3, name:"Charlie", score:78},
]

const taskList = [
    {id:1, task:"Do laundry", completed:true},
    {id:2, task:"Clean room", completed:false},
    {id:3, task:"Buy groceries", completed:true},
]



export default function FilteredLists() {
  return (
    <div>
        {/* <h2>Filtered List of Even Numbers</h2> */}
        {/* {numbers.filter(num => num % 2 === 0 ).map((num, index)=>{
            return <li key={index}>{num}</li>
        })} */}

        {/* {evenNumbers.map((num, index)=>{
            return <li key={index}>{num}</li>
        })} */}

        {/* <h2>Students who passed</h2>
        {students.filter(student => student.score >= 80).map((student)=>{
            return <li key={student.id}>{student.name} - {student.score}</li>
        })} */}

        <h1>Task List</h1>
        {taskList.map((task)=>{
            return <li key={task.id} style={{textDecoration: task.completed ? 'line-through' : 'none'}}>
                {task.task}
            </li>
        })}
    </div>
  )
}
