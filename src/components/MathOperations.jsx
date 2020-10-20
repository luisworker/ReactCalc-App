import React from 'react'
import PropTypes from 'prop-types'
import propTypes from './Button'
import { func } from 'prop-types'

const MathOperations=(OnclickOperations,OnclickEqual)=>{
    
    <section className="math-operations">
        <Button text="+" OnclickHandler={OnclickOperations}/>
        <Button text="-" OnclickHandler={OnclickOperations}/>
        <Button text="*" OnclickHandler={OnclickOperations}/>
        <Button text="/" OnclickHandler={OnclickOperations}/>
        <Button text="=" OnclickHandler={OnclickEqual}/>
    </section>

}
MathOperations.propTypes={
    OnclickOperations:PropTypes.func.isRequired,
    OnclickEqual:PropTypes.func.isRequired
}
export default MathOperations