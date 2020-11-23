import React from 'react'
import { NavLink } from 'react-router-dom'
import p from './Dialog.module.css'

const DialogItem = (props) => {
  return (
    <div className={p.dialogs}>
      <NavLink to={/dialogs/ + props.id}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return <div className={p.dialog}>{props.text}</div>
}

const Dialogs = (props) => {
  return (
    <div className={p.dialogs}>
      <div className={p.dialogsItems}>
        <DialogItem name="Dimasik" id="1" />
        <DialogItem name="Kirik" id="2" />
        <DialogItem name="Olega" id="3" />
        <DialogItem name="Artem" id="4" />
        <DialogItem name="Kostyan" id="5" />
        <DialogItem name="Sanek" id="" />
      </div>
      <div className={p.messages}>
        <Message text="Hello" />
        <Message text="How are you" />
        <Message text="Normalek?" />
        <Message text="Yo" />
        <Message text="Yo" />
      </div>
    </div>
  )
}

export default Dialogs
