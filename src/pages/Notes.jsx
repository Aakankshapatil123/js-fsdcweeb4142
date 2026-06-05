import axios from "axios";
import { useState } from "react";

const Notes = () => {

  const [notes, setNotes] = useState([])

  axios.get("https://6a229f4d5c610353286a1696.mockapi.io/notes")
  .then (response => {
    setNotes(response.data);
  } )
  return (
    <div>
      <ul>
        {
          notes.map((note) => (
            <li key={note.id}>{note.description}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Notes;
