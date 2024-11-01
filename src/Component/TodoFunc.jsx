import React, { useState } from 'react';

function TodoFunc({ todo,deleteTodos,editTodo,index}) {

  const [iscompleted,setIsCompleted] =useState(false);
  const toggle=()=>{
    setIsCompleted(!iscompleted)
  }

  return (
    <div className='todoItem'>
      <span style={{textDecoration:iscompleted?'line-through':'none',
         textDecorationColor: iscompleted ? '#ff2b7f' : 'transparent',
      }}>{todo}</span>
      <div className="icon-container">
      <button onClick={toggle} className="icon-button"><i className="fa-solid fa-square-check"></i></button>
      <button className="icon-button" onClick={()=>{
        editTodo(index)
      }}><i className="fa-solid fa-pen-to-square"></i></button>
      <button className="icon-button" onClick={()=>{
        deleteTodos(index)
      }}><i className="fa-solid fa-trash"></i></button>
    </div>
    </div>
  );
}

export default TodoFunc;
