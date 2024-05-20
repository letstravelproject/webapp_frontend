import Fifth from "./Fifth";
import {useState,useEffect} from 'react'
function LifeCycle(){
    let [show,setShow] = useState(false);
    let [setTxt] = useState('');
    let changeShow = () =>{
        setShow(!show);
    }
    useEffect(()=>{
        console.log('component monuted');
        return()=>{
            console.log('component unmonuted');
        }
    },)
    return(
        <div className="lifecycleapp" style = {{textAlign :"center"}}>
            <input type="text" onChange={(event)=>setTxt(event.target.value)}/>
            <button onClick={changeShow}>Show/Hide</button>
            {show?<Fifth/>:""}
        </div>

    );
};
export default LifeCycle;