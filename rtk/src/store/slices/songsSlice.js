import { reset } from "../actions";
import { createSlice } from "@reduxjs/toolkit";



const songsSlice = createSlice({
    name: "song",
    initialState: [],
    reducers: {
        //the pattern that createSlice follows is as a actionType - 'song'(name of the slice)+ '/' + 'addSong'(reducerfunction name) = 'song/addSong'
        //so actually this it knows when to run each of these individual funcs if there is an action dispatched with this type. then the songsSlice the big reducer created by it knows that it should run that pareticular function
        addSong(state, action){
            //STATE IS NOT THE BIG STATE OBJECT IN THE STORE.
            //IT IS THE PIECE OF STATE MANAGED BY THIS REDUCER
            state.push(action.payload)
        },
        //action with the type song/removeSong then this reducer functin is going to be executed
        removeSong(state, action){
            console.log(state, "remove index----")
            const index = state.indexOf(action.payload);
            console.log(index, "index>")
            state.splice(index, 1)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(reset, (state, action) =>{
                return [];
        })
    }
});

export const {addSong, removeSong} = songsSlice.actions;
export const songsReducer = songsSlice.reducer

