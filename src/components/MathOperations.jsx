import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const MathOperations=(OnclickOperations,OnclickEqual)=>(
    
    <section className="math-operations">
        <Button text="+" clickHandler={OnclickOperations}/>
        <Button text="-" clickHandler={OnclickOperations}/>
        <Button text="*" clickHandler={OnclickOperations}/>
        <Button text="/" clickHandler={OnclickOperations}/>
        <Button text="=" clickHandler={OnclickEqual}/>
    </section>

)
MathOperations.propTypes={
    OnclickOperations:PropTypes.func.isRequired,
    OnclickEqual:PropTypes.func.isRequired
}
export default MathOperations