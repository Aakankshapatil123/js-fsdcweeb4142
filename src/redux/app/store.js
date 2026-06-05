import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/registerSlice";
import loginReducer from "../features/loginSlice"
import notesReducer from "../features/notesSlice"

// create a store
const store = configureStore({
    reducer: {
        // add reducers here
        register: registerReducer,
        login: loginReducer,
        note:notesReducer
    }
});

// export the store
export default store;