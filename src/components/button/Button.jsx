import React from 'react'

export default function Button({status,extraClass,width,text,handleClick}) {
  return (
    <div style={{width:width,color:status?"black":"white"}} className={`
        button ${extraClass}
    `} onClick={()=>handleClick()}>
        {text}
    </div>
  )
}

