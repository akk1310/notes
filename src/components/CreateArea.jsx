import React, { useState , useEffect } from 'react'

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""

  })

  useEffect(() => {
        if (props.editNote) {
          setNote({
            title: props.editNote.title,
            content: props.editNote.content
          });
        }
      }, [props.editNote]);
    
  
  function handleChange(e) {
    const { name, value } = e.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })

  }

  


  function submit(event) {
    event.preventDefault();
    if (props.editMode) {
            props.onEditSubmit(props.editIndex, note);
          } else {
            props.onAdd(note);
          }
    setNote({
      title: "",
      content: ""
  
    })
    


  }
  return (

    <div>
      <form className='create-note'>
        <input onChange={handleChange} value={note.title} name='title' type="text" placeholder='Title' />
        <textarea onChange={handleChange} value={note.content} name='content' rows="3" placeholder='Take a note...' ></textarea>
        <button onClick={submit}>{props.editMode ? 'Update' : 'Add'}</button>

      </form>

    </div>
  )
}

export default CreateArea


