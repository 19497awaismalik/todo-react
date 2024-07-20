import React, { useEffect, useState } from 'react'
import GetTodo from "./GetTodo";

const AddTodo = () => {
    const [addTodo, setAddTodo] = useState([]);
    const [todo, settodo] = useState("")
const handleSubmit=(e)=>{
    e.preventDefault();
   if(todo===""){
    alert("Please fill todo for save on clound")
   }else{
   let editTodo=document.getElementById("update");
   if(editTodo){
         let alltodo= JSON.parse(localStorage.getItem("todo"));
       alltodo=  alltodo.map((item,index)=>{
                   
           if(editTodo.className==index){
            item=todo;
           } 
           return item;
          })
          setAddTodo(alltodo);
          settodo("");
          editTodo.style.background="purple";
          editTodo.id="save";
          localStorage.setItem("todo",JSON.stringify(alltodo));

   }else{

   
    if(localStorage.getItem("todo")){
      let alltodo=JSON.parse(localStorage.getItem("todo"));
      alltodo=alltodo.concat(todo);
      console.log("todo 15")
      setAddTodo(alltodo);
         localStorage.setItem("todo",JSON.stringify(alltodo))
      settodo("");
     }else{
         let newTodo=addTodo.concat(todo);
         console.log(newTodo,"todo 21")
  
         setAddTodo(newTodo);
         settodo("");
         localStorage.setItem("todo",JSON.stringify(newTodo));
        }
      }
}
}
useEffect(()=>{
if(localStorage.getItem("todo")){
    let todo=localStorage.getItem("todo")
    setAddTodo(JSON.parse(todo));
}
},[localStorage.getItem("todo")]);

const Deletehandle=(id)=>{

let alltodo=JSON.parse(localStorage.getItem("todo"));
let newtodo=alltodo.filter((item,index)=>index!==id);
localStorage.setItem("todo",JSON.stringify(newtodo));
setAddTodo(newtodo);
}
const Edithandle=(id)=>{
console.log(id);
let alltodo=JSON.parse(localStorage.getItem("todo"));
let editTodo=alltodo.filter((item,index)=>index===id);
console.log(editTodo);
editTodo.map((item)=>{
  settodo(item);
})
let btn=document.getElementById("save");
btn.innerHTML="Update";
btn.style.background="green"
btn.id="update"
btn.classList.add(id);
// btn.removeEventListener("click",handleSubmit);
// btn.addEventListener("click",updateTodo);
}

  return (
    <div className='container'>
        <h1>Manage Your Todos at one place</h1>
        <div className='input-container'>
           <label htmlFor="">Add a Todo</label>
           <div className='form'>
           <input type="text"  onChange={(e)=>settodo(e.target.value)} value={todo}/>
           <button id='save' onClick={handleSubmit}>Save</button>
           </div>
           <div className='line'></div>
           <h3>Your Todos</h3>
          {addTodo.map((item,index)=>{ 
             return <GetTodo key={index} index={index} item={item} Deletehandle={Deletehandle} Edithandle={Edithandle}/>
          })}
        </div>
    </div>
  )
}

export default AddTodo