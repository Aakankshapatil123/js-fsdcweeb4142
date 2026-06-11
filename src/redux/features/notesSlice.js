import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import nodeServices from "../../services/nodeServices";


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


// create new slice
export const notesSlice = createSlice({
    name: "note",
    initialState: {
        notes: [],
        loadingNotes: false,
        notesError: null,
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
    }
});


// export selector
export const selectNotes = (state) => state.note.notes;
export const selectLoadingNotes = (state) => state.note.loadingNotes;
export const selectNotesError = (state) => state.note.notesError;

// export reducer
export default notesSlice.reducer;