/* import redux tolkit */
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./features/PostSlice.jsx";
import usersReducer from "./features/UserSlice.jsx";

// create a store with redux toolkit
export const store = configureStore({
  reducer: {
    // add your reducers here
    posts: postsReducer,
    users: usersReducer,
  },
})

export default store;