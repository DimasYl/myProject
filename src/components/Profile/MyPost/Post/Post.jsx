import React from 'react'
import './Post.css'

const Post = (props)=>{
  return(
    <div className='posts'>
        <img src="https://img3.goodfon.ru/original/4500x3600/4/cf/britanskaya-korotkosherstnaya-5636.jpg" />
        {props.messages}
  </div>
  )
}

export default Post