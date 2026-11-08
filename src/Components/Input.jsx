import React from 'react'

function Input({placeholder, style}) {
  return (
    <input className={style} placeholder={placeholder}/>
  )
}

export default Input