import {createSlice} from "@reduxjs/toolkit";

const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: []
    },
    reducers: {
        addCar: (state,action)=> {

        },
        deleteCar: (state,action)=> {

        }
    }
});

export const {addCar, deleteCar} = carSlice.actions;
const carReducer = carSlice.reducer;
export default carReducer;