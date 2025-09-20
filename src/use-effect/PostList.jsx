import React from 'react'
import { useState, useEffect } from 'react'

// const data = [
//     {id: 1, title: 'Post 1', body: 'This is the body of post 1'},
   
// ]



export default function PostList() {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=5').then((response)=> response.json()).then((data)=> setPosts(data))

        // async function fetchData() {
        // const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        // // console.log(response)
        // const result = await response.json();
        // // console.log(result)
        // setPosts(result);
        // }

        // fetchData();
    },[])

    // console.log(posts)
  return (
    <div>
        <h1 className='text-3xl font-bold'>Post List</h1>

        <ul>
            {posts.map((post)=>{
                return <li key={post.id}>{post.title}</li>
            })}
        </ul>
    </div>
  )
}
