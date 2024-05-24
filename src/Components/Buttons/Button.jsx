import React from 'react'
import style from './Button.module.scss'

const Button = ({onclick ,text}) => {
  return (
  <button className={style.add} onClick={onclick}>{text}</button>
  )
}

export default Button
