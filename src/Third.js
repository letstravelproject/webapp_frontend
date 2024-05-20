import Second from './Second';

function Third(){
    
    let students = [
        {name : 'raju' ,
        qualification :'MCA'},
        {
            name : 'shiva' ,
        qualification :'B.Tech'},
       
        {
            name : 'Ventak' ,
        qualification :'B.Tech'},
        
    ]
    return(
        <div>
            {students.map((obj)=>
            {
                return <Second name={obj.name} qualification ={obj.qualification} />
            })}
        </div>
         
    );
};
export default Third;