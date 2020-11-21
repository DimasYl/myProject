import React from 'react'
import MyPost from './MyPost/MyPost'
import p from './Profile.module.css'

const Profile = () => {
  return (
    <div className={p.content}>
      <img src="https://img3.goodfon.ru/original/1920x1200/2/a1/koshki-zelennye-glaza-zelenaya.jpg" />
      <div className={p.ava}>
        <img
          src="https://yt3.ggpht.com/a/AATXAJw0LB3RNN12XLFoLzdvBUKPQQzun11LC3QoJ7lu=s900-c-k-c0x00ffffff-no-rj"
          title="ушастик"
        />
        Dimka
      </div>
      <MyPost />
    </div>
  )
}

export default Profile
