import { useNavigate } from 'react-router-dom';
import './Second.css'
import { myContext } from './App';
import { useEffect,useContext } from 'react';

function Second(props){
    let {isAuthenicated} = useContext(myContext);
    let navigate = useNavigate();
    useEffect(() => {
        if (!isAuthenicated) {
            navigate('/');
        }
    }, [isAuthenicated, navigate]);
    
    return(
        <div className="secondapp">
            <p>My name is : <strong>{props.name}</strong></p>
            <p>Qaulification is : <strong>{props.qualification}</strong></p>
            <hr></hr>
        </div>

    );



};

export default Second;