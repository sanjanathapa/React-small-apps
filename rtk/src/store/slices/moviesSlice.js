import { reset } from "../actions";
import { createSlice } from "@reduxjs/toolkit";

//creating a redux state slice or slice
const moviesSlice = createSlice({
    name: "movie",
    initialState: [],
    reducers: {
        addMovie(state, action){
            state.push(action.payload)
        },
        removeMovie(state, action){
            console.log(state, "remove index----")
            const index = state.indexOf(action.payload);
            console.log(index, "index>")
            state.splice(index, 1)
        },
        // reset(state, action){
        //     return [];             //rtk doesnt understand the mutate so we need to return an empty array to reset func. so that rtk can understnd that we want our existing state to be an empty aray
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(reset, (state, action) =>{
                return [];
        })
    }
})

console.log(moviesSlice.actions.removeMovie(), "----------------------------------type-")
export const {addMovie, removeMovie} = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer