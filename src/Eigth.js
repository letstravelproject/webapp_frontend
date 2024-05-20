import { useContext } from "react";
import { myContext } from "./App";

function Eigth(){
    let {x} = useContext(myContext);
    return(
        <div>
            <h1>It is eight component</h1>
            <h2>{x}</h2>
        </div>
    );
}
export default Eigth;