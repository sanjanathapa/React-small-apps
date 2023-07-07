//creating redux store
import { configureStore} from '@reduxjs/toolkit';
import { moviesReducer, addMovie, removeMovie } from './slices/moviesSlice';
import { songsReducer, addSong, removeSong } from './slices/songsSlice';
import { reset } from './actions';

//manual action creation



//after creating slice we then need to connect the combined reducer that is created by it(slices) to our redux store
const store = configureStore({
    reducer: {
        songs: songsReducer,  //here 'songs' is the state
        movies: moviesReducer
    }
});

//if we ever want to run a particular reducer without need to worry actiontype. all we have to do is mainSlice name .actions and the name of the reducer that we want to run
//thsi gonna return us an action object
//console.log(songsSlice.actions.addSong('new song!!'))


const getthestate = store.getState();
console.log(getthestate, ":this is the state");

// store.dispatch({
//     type: 'song/addSong',
//     payload: "NEW SONG!!!"
// });

//store.dispatch(songsSlice.actions.addSong('some new song'))
//this gonna create an action object and we then will dispatch it 

 const finalState = store.getState();
 console.log(finalState)

 //Three Things Slice do for us are: -
 //1.)Defines some initial state.
 //2.)Combines 'mini-reducers' into a big reducer.
 //3.)Create a set of 'action creator' functions.

export {store, addMovie, addSong, removeMovie, removeSong, reset};


//when an action is dispatched, it is sent to every reducer in the store. 
//we can also convince the particular slice to also look some other actiontype(if needed, if we want to update our one slice 
//depending on the other slice's state). i.e watching for other actions.

//for this purpose we gonna use an extrareducers and will provide a builder in it, 
//builder: this object is to tell our combined reducer to watch about some additional action types