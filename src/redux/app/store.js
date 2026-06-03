// this is where we will organize our store and import all the reducer

import { configureStore } from "@reduxjs/toolkit";
import reactionReducer from "../feature/reactionSlice";

const store = configureStore({
    reducer: {
      reaction: reactionReducer,   
    }
});

// export the store
export default store;