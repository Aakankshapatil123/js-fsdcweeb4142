// tjhis is where we will create our state, and reducer and action

import { createSlice } from "@reduxjs/toolkit";


// create the slice
export const reactionSlice = createSlice({
    name: "reaction",
    initialState:{
        likes: 0,
    },
    reducers: {
        setLikes: (state, action) => {
            state.likes = state.likes + 1;
        },

        setDislikes: (state, action) => {
            state.likes = state.likes - 1;
        }
    }
});

// export the action
export const {setLikes, setDislikes} = reactionSlice.actions;

//export the selector
export const selectLikes = (state) => state.reaction.likes;

// export reducer
export default reactionSlice.reducer;