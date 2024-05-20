
import {useState} from 'react';

function Project(){

    let [item,setItem] = useState('');
    let [items,setItems] = useState([]);

    let addItem =()=>{
        setItems([...items,item]);

    }
    let deleteitem = (it) => {
        let newItems =  items.filter((itt)=>{
            return itt !== it

        })
        setItems(newItems)

    }
    return(
        <div className='projectapp'>
            <input type='text'  onChange={(event)=>setItem(event.target.value)}/><button onClick={addItem}>additem</button>
            <ul>
                {items.map((it)=>{
                return <><li>{it}</li><button onClick={()=>deleteitem(it)}>X</button></>
                })}
            </ul>

        </div>

    );
};

export default Project;

