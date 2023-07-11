



const TodoEditBox=({hidebox, handleeditsubmit,
                    etodoname,handleeditchange,etododate,etodomessage})=>{
   

    
      

    return(   

     <>
     <fieldset className="editbox" style={hidebox}>
    <h1>Edit TODO</h1>
    <form onSubmit={handleeditsubmit}>

    <label>Todo Name: </label>
    <input type="text" name="todoname" value={etodoname}
    onChange={handleeditchange} required/>
      
      <label> Date: </label>
    <input type="date" name="date" value={etododate||""}  
    onChange={handleeditchange}required/> <br/>

<lable>Discription:</lable><br/>
        <textarea id="nm" name="todomessage" value={etodomessage||""} 
        onChange={handleeditchange} rows={2} cols={58}/>

        <br/><br/>
    <input type="submit" value="submit"/>    
    </form>
    </fieldset>
    </>)
}


export default TodoEditBox