import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNotes, setNotes } from "../redux/features/notesSlice";
import instance from "../instances/instance";
import { Link } from "react-router";
import nodeServices from "../services/nodeServices";

const Notes = () => {

  const notes = useSelector(selectNotes)
  const dispatch = useDispatch();

  const fetchNotes = async () => {
   try {
    const responce = await nodeServices.getNotes();
    dispatch(setNotes(responce.data))
   }catch(error) {
    dispatch(setNotes(null))
   }
  }

 useEffect(() => {
      fetchNotes();
  }, []);
  return (
    <div>
      <ul>
        {
          notes.map((note) => (
            <li key={note.id}>
              <Link to={`/dashboard/notes/${note.id}`}>{note.description}</Link>
              </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Notes;
