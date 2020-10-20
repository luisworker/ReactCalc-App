import React from 'react'
import PropTypes from 'prop-types'


const Result=(props)=>{
    const {value}=props
 //
    console.log('renderizacion del result '+value)
    return(
        <div className="result">
            <span >
                {value}
            </span>
        </div>
    )
}
//validacion con Proptypes verifica el tipo de los parametros y si es requerido
Result.propTypes={
    value:PropTypes.string.isRequired
}
//Con defaultProps se establecen valores por defecto para los parametros
Result.defaultProps={
    value:'0'
}
export default Result 