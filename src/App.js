
import './App.css';
import {useState} from 'react'
import Sai from './Sai'
import TodoEditBox from './TodoEdit'




function App() {

  const [todo,settodo]=useState([])    // paasing user values to array onSubmit
  const [valu,setvalue]=useState({})  //getting user values in object

//hiding and displaying edit box
  const hide={display:"none"}
  const [hidebox,sethidebox]=useState(hide)

// displaying values on edit box
const [edvalue,setedvalue]=useState("")

 const [etodoname,setetodoname]=useState("")
 const [etododate,setetododate]=useState("")
  const [etodomessage,setetodomessage]=useState("")
 
 
  const handlechange=(event)=>{
    const name=event.target.name
 var val=event.target.value
 
 setvalue(
  (values)=>({...values,[name]:val})
 )
   }
   
   
  const handlesubmit=(event)=>{
    event.preventDefault()
    const b=todo.includes(valu)
    // const c=Object.values.includes(valu.todoname)
   if (b===true){ 
    alert("todo item already present")
   }
   else{
    settodo(
      (values)=>([...values,valu])
     )
     }
         
    }

  const displayedit=(evalue)=>{
    const display={display:"block"}
     sethidebox(display)

     const displayeditvalue=todo.find((val)=>{
      return val.todoname===evalue.todoname&&val.date===evalue.date&&val.todomessage===evalue.todomessage
     })

    setedvalue(displayeditvalue)//form post edited value
    setetodoname(displayeditvalue.todoname)
    setetododate(displayeditvalue.date)
    setetodomessage(displayeditvalue.todomessage)
  
  }  


  const handleeditchange=(event)=>{
    
    const ename=event.target.name
    const evalue=event.target.value
  
    // form not taking input so this code 
    if(event.target.name==="todoname"){setetodoname(evalue)}
    else if(event.target.name==="date"){setetododate(evalue)}
    else {setetodomessage(evalue)}
  
    
  }

  

    

  
  const handleeditsubmit=(event)=>{
    event.preventDefault()
    const todoname=event.target[0].name
    const todovalue=event.target[0].value
    const tododate=event.target[1].name
    const tododvalue=event.target[1].value
    const todomname=event.target[2].name
    const todomvalue=event.target[2].value

    const b={
      [todoname]:todovalue,
      [tododate]:tododvalue,
      [todomname]:todomvalue
    }
   
 sethidebox(hide)

const rplace=todo.findIndex((vall)=>{
  return vall.todoname==edvalue.todoname&&vall.date==edvalue.date&&vall.todomessage==edvalue.todomessage
})

    todo[rplace]=b
  }


    const handledelete=(indexvalue)=>{
      const deletetodo=todo.filter((value,index)=>index !== indexvalue)
      settodo(deletetodo)
    }

    return (<div className='body'>
    <div className="body">
    <div className="main">

    <fieldset className='todolisty'>
    <h1>ADD TODO</h1>
    <form onSubmit={handlesubmit} >

    <label>Todo Name: </label>
    <input type="text" name="todoname" onChange={handlechange} required/>
      
      <label> Date: </label>
    <input type="date" name="date"  onChange={handlechange} required/> <br/>

<lable>Discription:</lable><br/>
        <textarea id="nm" name="todomessage"   rows={2} cols={58}
        onChange={handlechange}/>

        <br/><br/>
    <input type="submit" value="submit"/>    
    </form>
    </fieldset>
    <h1 className="todolist">TODO LIST</h1>
    <div className="clist">
    <Sai todos={todo} handledelete={handledelete} displayedit={displayedit}/>
    </div>

    </div>
    </div>
    <TodoEditBox 
      hidebox={hidebox} 
      handleeditchange={handleeditchange}
      handleeditsubmit={handleeditsubmit}
      edvalue={edvalue}
      etodoname={etodoname}
      etododate={etododate}
      etodomessage={etodomessage}
       />
    </div>)
}
// export default App
export default App