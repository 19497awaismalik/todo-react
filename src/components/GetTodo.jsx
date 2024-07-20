import React from 'react'

const GetTodo = ({item,index,Deletehandle,Edithandle}) => {
  return (
    <div className='get-todo'>
        <p>{item}</p>
        <div className='button'>
            <button onClick={()=>Edithandle(index)}>Edit</button>
            <button onClick={()=>Deletehandle(index)}>Delete</button>
        </div>

    </div>
  )
}

export default GetTodo