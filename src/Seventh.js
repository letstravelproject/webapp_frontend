import Eigth from "./Eigth";
import { useContext } from "react";
import { myContext } from "./App";
function Seventh(){
    let {x} = useContext(myContext);
    return(
        <div>
            <h1>it is seventh component</h1>
            <h2>{x}</h2>
            <Eigth />
        </div>
    );
}
export default Seventh;