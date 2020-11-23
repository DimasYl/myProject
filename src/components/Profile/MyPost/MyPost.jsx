import React from 'react'
import p from './MyPost.module.css'
import Post from './Post/Post'

const MyPost = ()=>{
  return(<div>
        <div>Наши гости
          <textarea></textarea>
          <button>Add Post</button>
      <Post messages='Привет ребята' />
      <Post messages='Зовут Дымком'/>
      <Post messages='Hello World'/>
      <Post messages='А еще я крол'/>
      </div>
      </div>
  )
}

export default MyPost