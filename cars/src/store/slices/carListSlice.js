import {createSlice, nanoid} from '@reduxjs/toolkit';


const carListSlice = createSlice({
    name: 'carList',
    initialState: {
        searchTerm: '',
        carLists: [],
    },
    reducers: {
        addCar: (state, action)=>{
            state.carLists.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            })
        },

        removeCar : (state, action) =>{
            const updated = state.carLists.filter((car) =>{
                return car.id !== action.payload
            });
            state.carLists = updated;
        },
        changeSearchTerm: (state, action) =>{
            state.searchTerm = action.payload
        }
    },

});

console.log(carListSlice.actions.addCar())
export const {addCar, removeCar, changeSearchTerm} = carListSlice.actions;
export const carListReducer = carListSlice.reducer
