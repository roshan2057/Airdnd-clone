import React from 'react'
import './inputbox.css'

const Inputbox = (props) => {
  return (
   <>
   <input type={props.type} placeholder={props.placeholder}  />
    </>
  )
}

export default Inputbox