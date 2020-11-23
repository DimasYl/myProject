import React from 'react'
import { NavLink } from 'react-router-dom'
import p from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={p.nav}>
      <div className={p.item}>
        <NavLink to="/profile" activeClassName={p.activeLink}  title="Ваш профиль">
          Profile
        </NavLink>
      </div>
      <div className={`${p.item} ${p.active}`}>
        <NavLink to="/dialogs" activeClassName={p.activeLink} title="Ваши сообщения">
          Messages
        </NavLink>
      </div>
      <div className={p.item}>
        <NavLink to="/news" activeClassName={p.activeLink}  title="Новости">
          News
        </NavLink>
      </div>
      <div className={p.item}>
        <NavLink to="/music" activeClassName={p.activeLink} title="Музыка">
          Music
        </NavLink>
      </div>
      <div className={p.item}>
        <NavLink to="/settings" activeClassName={p.activeLink} title="Настройки">
          Settings
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
