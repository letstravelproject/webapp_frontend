import { useState,useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { myContext } from "./App";

function Login(){
    let {setisAuthenicated,setToken} = useContext(myContext);
    let [uname,setUname] = useState('');
    let [pwd,setPwd] = useState('');
    let nagivate = useNavigate();
    let checkLogin=()=>{
        let P_url = 'http://127.0.0.1:8000/api/login/'
        let credentials ={
            username : uname,
            password : pwd
        }
        axios.post(P_url,credentials).then((resp)=>{
            if(resp.status === 200){
                console.log('login successful')
                setisAuthenicated(true);
                setToken(resp.data['token'])
                nagivate('/first');

            }
            else{
                console.log('login falied')
                nagivate('/');
            }
        }).catch((error)=>{
            console.log(error);
        })
    }
    return(
        <div>
            Username<input type="text" onChange={(e)=>setUname(e.target.value)}/><br></br>
            Password<input type="text" onChange={(e)=>setPwd(e.target.value)}/><br></br>
            <button onClick={checkLogin}>Login</button>
        </div>
    );
}

export default Login;