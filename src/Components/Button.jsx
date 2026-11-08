import React from 'react'

function Button({label,click ,style, icon}) {
  return (
    <button className={`${style}`} onClick={click}>{label}{icon}</button>
  )
}

export default Button