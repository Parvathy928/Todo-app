import React, { useState } from 'react'
import TodoFunc from './TodoFunc';

function TodoInput() {
  const [todo,setTodo]=useState("");
  const [todoArr,setTodoArr]=useState([]);

  function handleTodos(newTodo){
    const newItems=[...todoArr,newTodo]
    setTodoArr(newItems)
    setTodo("")
  }
  
  function deleteTodos(index){
    const newItem=todoArr.filter((todo,todoIndex)=>{
      return todoIndex!==index
    })
    setTodoArr(newItem)
  }
  function editTodo(index){
    const newItem=todoArr[index];
    setTodo(newItem)
    deleteTodos(index)
  }
  return (
    <div className='main'>
      <input type='text' placeholder='Enter the Todo....'id='input-type' value={todo} onChange={(e)=>{
        setTodo(e.target.value)
      }}/>
      <button onClick={()=>{
        handleTodos(todo)
      }} className='btn'>Add</button>
       {
      todoArr.map((todo,index)=>{
        return(
          <div key={index}>
            <TodoFunc todo={todo} deleteTodos={deleteTodos} editTodo={editTodo} index={index}/>
          </div>
        )
      })
      }

    </div>
   
  )
}

export default TodoInput