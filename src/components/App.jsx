import React, { useState ,useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
import CreateArea from './CreateArea'
import Note from './Note'



function App(props) {
  const [notes, setNotes] = useState([])
  const [editNote, setEditNote] = useState(null)
  const [editIndex, setEditIndex] = useState(null)
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    let noteString = localStorage.getItem("notes")
    if (noteString) {
      let notes = JSON.parse(localStorage.getItem("notes"))
      setNotes(notes)

    }


  }, [])




  const saveToLS = (newNotes) => {

    localStorage.setItem("notes", JSON.stringify(newNotes))
  }






  const handleAdd=(note) =>{
    // const newNotes = [...notes,  note];
    // setNotes(newNotes);

    setNotes(prevNotes => {
      const newNotes = [...prevNotes, note];
      saveToLS(newNotes);
      return newNotes;
    })
    

  }
  
  const handleDelete=(id) =>{
    setNotes((prevNotes) => {
      const newNotes = prevNotes.filter((noteItem, index) => index !== id);
      saveToLS(newNotes);
      return newNotes;

    }

    )
    

  }
  const handleEdit = (id) =>{
    const noteToEdit = notes[id]
    setEditNote(noteToEdit);
    setEditIndex(id);
    setEditMode(true);
    // saveToLS(notes);




  }
  const handleEditSubmit=(id, updatedNote)=> {
    setNotes((prevNotes) => {
      const newNotes = prevNotes.map((note, index) => (index === id ? updatedNote : note));
      saveToLS(newNotes);
      return newNotes;
    });
    
    setEditMode(false);
    setEditNote(null);
    setEditIndex(null);
    
  }


  return (
    <>
      <Header />
      <CreateArea onAdd={handleAdd} editNote={editNote} editMode={editMode}
        editIndex={editIndex} onEditSubmit={handleEditSubmit} />
      {notes.map((noteItem, index) => {
        return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={handleDelete} onEdit={handleEdit} />

      })}

      <Footer />
    </>
  )
}

export default App

