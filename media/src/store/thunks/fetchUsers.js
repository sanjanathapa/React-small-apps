import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk('users/fetch', async() =>{
    const response = await axios.get("http://localhost:3005/users");
    console.log("this is the data", response)
    return response.data
});

export {fetchUsers}

//we will use async thunk function to handle the users
//will use redux toolkit query to handle the albums and photos. 

//async thunk function work
//its going to watch the data loading process and at vry specific points in time it is going to automatically dispatch these very particulat actins.
//then we are going to configure our user slice to watch for these actions, and any time when we see them we are going to make the appropriate state update

//Creating an async thunk
//1.) create a new file for your thunk. Name it after the purpose of the request.
//2.) create the thunk. give it a base typethat describes the purpose of the request.
//3.) in the thunk, make the request, return the data that you want to use in the reducer.
//4.) in the slice, add extraReducers, watching for the action types made by the thunk.
//5.) export the thunk from the store.
//6.) when a user does something, dispatch the thunk function to run it.

//the string that we add into the async thunk is kind of base type. its going to be used to generate types 