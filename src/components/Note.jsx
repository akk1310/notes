import React from 'react'

 function Note(props) {
  function handleClick(){
    props.onDelete(props.id)
  }
  function handleeditClick(){
    props.onEdit(props.id)
  }
  
  
  return (
    <div className='note'>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>Delete</button>
      <button onClick={handleeditClick}>Edit</button>
      
    </div>
  )
}
export default Note