import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="nav">
      <div>
        <a href="#"  className='item' title = 'Ваш профиль'>Profile</a>
      </div>
      <div>
        <a href="#"  className='item' title = 'Ваши сообщения'>Messages</a>
      </div>
      <div>
        <a href="#" className='item' title = 'Новости'>News</a>
      </div>
      <div>
        <a href="#" className='item' title = 'Музыка'>Music</a>
      </div>
      <div>
        <a href="#" className='item' title = 'Настройки'>Settings</a>
      </div>
    </nav>
  )
}

export default Navbar
