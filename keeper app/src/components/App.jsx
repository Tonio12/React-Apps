import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([{
        title: "",
        content: ""
    }])
    function addNote(newNote){
        return setNotes(prevValues =>{
            return [...prevValues, newNote]
        });
    };

    function deleteNote(id){
     setNotes(prevValues => {
        return prevValues.filter((note, index)=>{
            return id != index;
        })
     })
    };

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote}/>
      {notes.map((note, index)=>{
        return <Note key={index} id={index} delNote={deleteNote} title={note.title} content={note.content} />
      })}
      <Footer />
    </div>
  );
}

export default App;
