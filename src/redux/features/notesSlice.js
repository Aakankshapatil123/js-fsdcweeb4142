import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import nodeServices from "../../services/nodeServices";

// GET /notes
export const fetchNotes = createAsyncThunk(
    'note/fetchNotes',
    async (_, thunkAPI) => {
        try {
            const response = await nodeServices.getNotes();
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to fetch notes"
            )
        }
    }
)


// Get /notes/:id
export const fetchNoteById = createAsyncThunk(
    'note/fetchNoteByID',
    async(id, thunkAPI) => {
        try {
            const response = await nodeServices.getNodesById(id);
            return response.data
        }catch(error) {
            return thunkAPI.rejectWithValue(
                error.response?.message || "Failed to fetch note"
            )
        }
    }
)


// create new slice
export const notesSlice = createSlice({
    name: "note",
    initialState: {
        notes: [],
        loadingNotes: false,
        notesError: null,
        note: null,
        loadingNote: false,
        noteError: null
    },
    reducers: {},
    extraReducers: (builder) => {
        // fetchNotes
        builder
            .addCase(fetchNotes.pending, (state) => {
                state.loadingNotes = true;
                state.notesError = null;
            })
            .addCase(fetchNotes.fulfilled, (state, action) => {
                state.loadingNotes = false;
                state.notes = action.payload;
            })
            .addCase(fetchNotes.rejected, (state, action) => {
                state.loadingNotes = false;
                state.notes = [];
                state.notesError = action.payload || "Failed to fetch notes";
            })

            .addCase(fetchNoteById.pending, (state) => {
                state.loadingNote = true;
                state.noteError = null;
            })
            .addCase(fetchNoteById.fulfilled, (state, action) => {
                state.loadingNote = false;
                state.note = action.payload;
            })
            .addCase(fetchNoteById.rejected, (state, action) => {
                state.loadingNote = false;
                state.note = null;
                state.noteError = action.payload || 'Failed to fetch note'
            })
    }
});


// export selector
export const selectNotes = (state) => state.note.notes;
export const selectLoadingNotes = (state) => state.note.loadingNotes;
export const selectNotesError = (state) => state.note.notesError;

export const selectNote = (state) => state.note.note;
export const selectLoadingNote = (state) => state.note.loadingNote;
export const selectNoteError = (state) => state.note.noteError

// export reducer
export default notesSlice.reducer;