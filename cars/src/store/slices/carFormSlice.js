import {createSlice} from '@reduxjs/toolkit';
import { addCar } from './carListSlice';

const carFormSlice = createSlice({
    name: 'CarFormSlice',
    initialState: {
        name: '',
        cost: 0
    },
    reducers: {
        changeCarName(state, action){
            state.name = (action.payload)
        },

        changeCost : (state, action) =>{
            state.cost = action.payload
        }
    },
    extraReducers(builder){
        builder.addCase(addCar, (state, action)=>{
            state.name = '';
            state.cost = 0
        })
    }
});

console.log(carFormSlice.actions.changeCarName())
export const {changeCarName, changeCost} = carFormSlice.actions;
export const carFormReducer = carFormSlice.reducer
