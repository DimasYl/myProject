import React from 'react'
import p from './MyPost.module.css'
import Post from './Post/Post'

const MyPost = ()=>{
  return(<div>
        Наши гости
      <Post messages='Здарова ребята' />
      <Post messages='Зовут Дымком'/>
      <Post messages='Hello World'/>
      <Post messages='А еще я крол'/>
      </div>
  )
}

export default MyPost