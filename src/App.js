import React,{useState} from 'react'
// import Child from './Child'
// import { Parent } from './Parent'
import './App.css';
import { Parent } from './Parent';

const App=()=>{
    // const {name,age}={name:"abcb",age:"123" }
    // // console.log(obj.name)
    // console.log(name);
    // console.log(age);
    // 
    const [light,setLight] = useState(false);
    
    const changeLight=()=>{
        light?setLight(false):setLight(true);
    }

    const changeButton=()=>{
        return(
            <Parent/>
        )
    }
    
    return(
        <div className={light?"On":"Off"}>
            <h3>Room Light is {light?"On":"Off"}</h3>
            {/* <button  onClick={changeLight}>Light ON/OFF</button>         */}
            <button  onClick={changeButton}>Light ON/OFF</button> 
        </div>        
    )
}

export default App;