import React from 'react'
import './button.css'

const Button = (props) => {
  return (
    <>
    <button type={props.type}>{props.name}</button>
    </>
  )
}

export default Button