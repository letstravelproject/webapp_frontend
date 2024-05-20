import { useEffect, useState,useContext } from "react";
import axios from "axios";
import { myContext } from "./App";
import { useNavigate } from "react-router-dom";

function Employee(){
    let {isAuthenicated} = useContext(myContext);
    let [data,setData] = useState([]);
    let navigate = useNavigate();
    let [pno,setPno] = useState(1);
    let pageSize = 5;
    if(isAuthenicated == false){
        navigate('/');
    }

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/getdataendpoint/').then((resp)=>{
            console.log(resp.data);
            setData(resp.data)
        }).catch((error)=>{
            console.log(error);
        })
    },[])
    return(
        <div>
            <h1>Fatching the data from Django app</h1>
            {data.slice(pno*pageSize - pageSize,pno*pageSize).map((Obj)=>{
                return <><p>{Obj.empname} - {Obj.salary}</p></>
            })}
            <button onClick={()=>setPno(pno-1)}>Prev</button>
            <button onClick={()=>setPno(pno+1)}>Next</button>
            
        </div>
    );
};
export default Employee;