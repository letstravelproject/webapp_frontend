
import './App.css';
import Employee from './Employee';
import First from './First';
import Second from './Second'
import Seventh from './Seventh';
import Login from './Login';
import Form from './Form';
import { createContext,useState } from 'react';
import { Routes,Route,Link} from 'react-router-dom'; 

export const myContext = createContext()
function App() {
  let x = 'Charan'
  let [isAuthenicated,setisAuthenicated] = useState(false);
  let [token,setToken] = useState('');
  return (
    <div className="App">
      <myContext.Provider value={{x,isAuthenicated,setisAuthenicated,token,setToken}}>
       <nav>
        <Link to="/first">Home</Link>
        <Link to="/second">Second</Link>
        <Link to="/employee">Employee</Link>
        <Link to="/insert">Insert</Link>
        {/* <Link to="/login">Login</Link> */}
       </nav>
        <Routes>
          <Route path="/first" element={<First />}/>
          <Route path="/second" element={<Second />}/>
          <Route path="/employee" element={<Employee />}/>
          <Route path="/insert" element={<Form />}/>
          <Route path="/" element={<Login />}/>
        </Routes>
      </myContext.Provider>
    </div>
  );
}

export default App;
