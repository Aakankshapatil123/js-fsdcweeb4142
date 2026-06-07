import { createSlice } from "@reduxjs/toolkit";

// create new slice
export const notesSlice = createSlice({
    name: "note",
    initialState: {
       notes: [],
       nodes: null
    },

    reducers: {
        setNotes: (state,action) => {
            state.notes = action.payload
        },
        setNodes: (state,action) => {
            state.nodes = action.payload
        }
    }
});

// export action
export const {setNotes, setNodes} = notesSlice.actions

// export selector
export const selectNotes = (state)=> state.note.notes;
export const selectNodes = (state) => state.note.nodes;

// export reducer
export default notesSlice.reducer;