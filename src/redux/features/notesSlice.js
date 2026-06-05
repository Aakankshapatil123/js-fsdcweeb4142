import { createSlice } from "@reduxjs/toolkit";

// create new slice
export const notesSlice = createSlice({
    name: "note",
    initialState: {
       notes: [] 
    },

    reducers: {
        setNotes: (state,action) => {
            state.notes = action.payload
        }
    }
});

// export action
export const {setNotes} = notesSlice.actions

// export selector
export const selectNotes = (state)=> state.note.notes;

// export reducer
export default notesSlice.reducer;