import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNotes, setNotes } from "../redux/features/notesSlice";

const Notes = () => {

  const notes = useSelector(selectNotes)
  const dispatch = useDispatch();

 useEffect(() => {
      axios.get("https://6a229f4d5c610353286a1696.mockapi.io/notes")
  .then (response => {
    dispatch(setNotes(response.data));

  });
 }, []);
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
