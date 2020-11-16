import React from 'react'
import properties from './Profile.module.css'

const Profile = () => {
  return (
    <div className={properties.content}>
      <img src="https://img3.goodfon.ru/original/1920x1200/2/a1/koshki-zelennye-glaza-zelenaya.jpg" />
      <div className={properties.ava}>
        <img
          src="https://yt3.ggpht.com/a/AATXAJw0LB3RNN12XLFoLzdvBUKPQQzun11LC3QoJ7lu=s900-c-k-c0x00ffffff-no-rj"
          title="ушастик"
        />
        Dimka
      </div>
      <div>
        My post
        <div>
          New post
          <div className={properties.item}>Post1</div>
          <div className={properties.item}>Post2</div>
          <div className={properties.item}>Post3</div>
        </div>
      </div>
    </div>
  )
}

export default Profile
