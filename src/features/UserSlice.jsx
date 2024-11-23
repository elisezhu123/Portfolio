/* import creatSlice */
import { createSlice } from "@reduxjs/toolkit";

/* create a slice for users */
const initialState = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Dave Smith' },
    { id: '3', name: 'Jane Doe' },
    { id: '4', name: 'Sam Liu' },
    { id: '5', name: 'Tom Qing' },
    { id: '6', name: 'Jenny Wang' },
    { id: '7', name: 'Tommy Lee' },
    { id: '8', name: 'Lily Zhang' },
]

const usersSlice = createSlice({
    name: 'users', // set the name of the slice
    initialState, // set the initial state
    reducers: {
        userAdded(state, action) {
            state.push(action.payload); // Add new user to the state
          },
    }, // add reducers here
});

export const { userAdded } = usersSlice.actions; // export the userAdded action

export const selectAllUsers = (state) => state.users; // create a selector to access the users state

export default usersSlice.reducer // export the reducer