import React, {useState} from "react";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({
    title:"",
    content:""
  });

  function handleChange(event){
    const {name, value} = event.target;
    setNewNote(prevValue =>{
      return {...prevValue, [name]: value}
    });
  };

  return (
    <div>
      <form>
        <input 
          onChange={handleChange}
          value={newNote.title} 
          name="title" 
          placeholder="Title" 
        />
        <textarea 
          onChange={handleChange} 
          name="content" 
          value={newNote.content} 
          placeholder="Take a note..." 
          rows="3" 
        />
        <button onClick={(event)=>{props.addNote(newNote); setNewNote({title:"", content:""}); event.preventDefault(); }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
