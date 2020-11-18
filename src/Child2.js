import React,{useReducer, useState} from 'react'
import ValueReducer from './ValueReducer'

export const Child2 = () => {
    
    const[value,setValue]=useState(0)

    const [state, dispatch] = useReducer(ValueReducer, value);
    const people = [
        {name: 'Jay', alive: true},
        {name: 'Kailee', alive: true},
        {name: 'John', alive: true},
        {name: 'Mia', alive: false}
      ]
    
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={()=>{
                dispatch({type:'INCREMENT',value:5});
            }}>Increment</button>
            <button onClick={()=>{
                dispatch({type:'DECREMENT',value:2});
            }}>Decrement</button>
            <ol>
            {people.map((person,index)=>{
                console.log(index)
                console.log(person)
                return(
                    <li>
                        Name :{person.name}
                        Alive:{person.alive?"true":"false"}
                    </li>   
                )
            })}
            </ol>
        </div>
    )
}
