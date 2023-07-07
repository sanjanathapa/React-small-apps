import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { changeCarName, changeCost, carFormReducer } from './slices/carFormSlice'
import { addCar, removeCar, changeSearchTerm, carListReducer } from './slices/carListSlice';

const rootReducer = combineReducers({
  carList: carListReducer,
  carForm: carFormReducer
});

const store = configureStore({
  reducer: rootReducer
});

const getStatee = store.getState();
console.log(getStatee, "state>>>>>>>>>>>>>>>>>123");

export { store, changeCarName, changeCost, addCar, removeCar, changeSearchTerm };
