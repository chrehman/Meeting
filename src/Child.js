import React,{useContext} from 'react'
import ValueContext from './ValueContext';

const Child = () => {
    const value= useContext(ValueContext);
    console.log(value)
    
    return (
        <div>
            <h1>Hello From Child {value[0]}</h1>
            <button onClick={()=>{
                    value[1](++value[0])
            }}>Increase</button>
            <button onClick={()=>{
                    value[1](--value[0])
            }}>Increase</button>   
        </div>
    )
}

export default Child;