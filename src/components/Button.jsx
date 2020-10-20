import React from 'react'
import PropTypes, { func } from 'prop-types'

const Button=({type,text,clickHandler})=>{
    return (
        <button className={type} onClick={()=>{
            
            clickHandler(text)
        }}>
            <span>{text}</span>
        </button>
    )
}
Button.prototype={
    type:PropTypes.string,
    text:PropTypes.string.isRequired,
    clickHandler:func.isRequired
}

export default Button
