// tjhis is where we will create our state, and reducer and action

import { createSlice } from "@reduxjs/toolkit";


// create the slice
export const reactionSlice = createSlice({
    name: "reaction",
    initialState:{
        likes: 0,
        dislikes: 0,
        reactions: [],
    },
    reducers: {
        setLikes: (state, action) => {
            state.likes = state.likes + 1;
        },

        setDislikes: (state, action) => {
            state.dislikes = state.dislikes + 1;
        },

        setReactions: (state, action) => {
            state.reactions.push(action.payload)
        }
    }
});

// export the action
export const {setLikes, setDislikes, setReactions} = reactionSlice.actions;

//export the selector
export const selectLikes = (state) => state.reaction.likes;

// export another selector
export const selectDislikes = (state) => state.reaction.dislikes;

// export selector
export const selectReactions = (state) => state.reaction.reactions;

// export reducer
export default reactionSlice.reducer;