//importacion
import React from 'react';
import Button from './components/Button'
import MathOperations from'./components/MathOperations'
import Result from'./components/Result';
//importar css
import './App.css'
//generacion de la funcion del componente
//funcion flecha
const App=()=>{
    const clickHandlerFunction=(text)=>{
        return (text)
    }
   

   return (
   <main className='react-calculator'>Calc App
    <Result value={"10"}/>
   <div className="numbers">
       <Button text="1" clickHandler={clickHandlerFunction}/>
       <Button text="2" clickHandler={clickHandlerFunction}/>
       <Button text="3" clickHandler={clickHandlerFunction}/>
       <Button text="4" clickHandler={clickHandlerFunction}/>
       <Button text="5" clickHandler={clickHandlerFunction}/>
       <Button text="6" clickHandler={clickHandlerFunction}/>
       <Button text="7" clickHandler={clickHandlerFunction}/>
       <Button text="8" clickHandler={clickHandlerFunction}/>
       <Button text="9" clickHandler={clickHandlerFunction}/>
       <Button text="0" clickHandler={clickHandlerFunction}/>
       </div>
       <div className="functions">
       <button>ce</button>
       <button>◄</button>
       </div>
        <MathOperations OnclickOperation={(operation)=>{
        (console.log('operaciones'+ {operation}))
    }} OnclickEcual={(operation)=>{
        (console.log('operaciones'+ {operation}))}}/>
   </main>
       )
}
//exportacion
export default App;


