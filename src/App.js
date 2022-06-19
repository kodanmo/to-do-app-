import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {

const[toDo,setTodo]   = useState('')
const[toDos,setTodos] = useState([])




  return (

    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value = {toDo} onChange={(e)=>{setTodo(e.target.value)}} type="text" placeholder="🖊️ Add item..." />
       
        <i onClick={()=>{setTodos([...toDos,{text:toDo,status:false,id:Date.now()}])}}  className="fas fa-plus"></i>

        {console.log(toDos)}
      </div>


      
      <div className = "todos">
          {
           toDos.map((obj)=>{return(
            
      
        <div className="todo">
          <div className="left">
        
            <input onChange={(e)=>setTodos(toDos.filter(obj2=>{
              if(obj2.id===obj.id)
              {
                obj2.status=e.target.checked;
                
              }
              
              return obj2;
            }))}  value = {obj.status} type="checkbox" name="" id="" />
            
            <div className={obj.status ? "strike" : ""}>
            <p>{obj.text}</p>
            </div>
          </div>
          <div className="right">
          
            <i onClick={()=>{setTodos(toDos.filter(obj3=>{
              return obj3.id!==obj.id;
            }))}}  className="fas fa-times"></i>

          </div> 

        
        </div>
           )})}
           {toDos.map((obj)=>{if(obj.status){return(<h1>{obj.text}</h1>)}})}
      </div> 
      
      
    </div>
  );
}

export default App;
