import React,{useState} from 'react'
// import Child from './Child'
// import { Parent } from './Parent'
import './App.css';
import { Child2 } from './Child2';
import { Parent } from './Parent';
import ValueContext from './ValueContext';

const App=()=>{
    // const {name,age}={name:"abcb",age:"123" }
    // // console.log(obj.name)
    // console.log(name);
    // console.log(age);
    // 
    const light = useState(55);
    
    return(
        // <ValueContext.Provider value={light}>
        //     <Parent/>
        // </ValueContext.Provider>        
    
        <Child2/>
    )
}

export default App;