import { useState,useContext,useEffect } from "react";
import axios from "axios";
import { myContext } from "./App";
import { useNavigate } from "react-router-dom";

function Form(){
    let {isAuthenicated} = useContext(myContext);
    let [empno,setEmpno] = useState('');
    let [empname,setEmpname] = useState('');
    let [salary,setSalary] = useState(0);
    let [department,setDepartment] = useState('');
    let navigate = useNavigate();
    useEffect(() => {
        if (!isAuthenicated) {
            navigate('/');
        }
    }, [isAuthenicated, navigate]);
    let handlesubmit=()=>{
        let empdata ={
            "empno": empno,
            "empname":empname,
            "salary":salary,
            "department":department
        }
        axios.post('http://127.0.0.1:8000/api/getdataendpoint/',empdata).then((resp)=>{
            console.log(resp);

        }).catch((error)=>{
            console.log(error);
        })
        
    }
    return(
        <div className="formapp">
            <form onSubmit={handlesubmit}>
                Empno <input type="text" onChange={(e)=>setEmpno(e.target.value)} /><br></br><br></br>
                Empname <input type="text" onChange={(e)=>setEmpname(e.target.value)}/><br></br><br></br>
                Salary<input type="text" onChange={(e)=>setSalary(e.target.value)}/><br></br><br></br>
                Department <input type="text" onChange={(e)=>setDepartment(e.target.value)}/><br></br><br></br>
                <input type="submit" value="submit" />
            </form>
        </div>
    );
}
export default Form;