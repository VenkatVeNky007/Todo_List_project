
import './App.css';
import {useState} from 'react'





const Sai = ({todos,handledelete,displayedit}) => {
// displaying todo part
   return(<>
 
    {todos.map((value,index)=>(<>

        <div id="dtodo" key={index}>
        
        
        <div id="dtodo2" >
    <h1 className="todoname">{value.todoname}</h1><br/>
    
    <span  className="date">{value.date}</span>
   
    <p>{value.todomessage}</p>
    </div>


    <div id="dtodo3">
    
    <img id="delimg"src="https://venkatvenky007.github.io/Todo_List_project/edit.png" alt="edit image" onClick={()=>displayedit(value)} />
    </div>
   
    <div id="dtodo4">
    <img id="delimg"src="https://venkatvenky007.github.io/Todo_List_project/delete.png" alt="delete image" onClick={()=>handledelete(index)} />
    </div>

     </div>

 
     </>))}
  
    
     
   
   </>)
  };
 

 
   
 
  


  export default Sai;