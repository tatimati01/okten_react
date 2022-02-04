import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {carService} from "../services";

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue})=> {
        try {
            const cars = await carService.getAll();
            return cars
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        status: null,
        error: null
    },
    reducers: {
        addCar: (state,action)=> {
            state.cars.push({
                id: new Date().getTime(),
                ...action.payload.data
            })
        },
        deleteCar: (state, action)=> {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        }
    },
    extraReducers: {
        [getAllCars.pending]: (state,action)=> {
            state.status = 'pending'
            state.error = null
        },
        [getAllCars.fulfilled]: (state,action)=> {
            state.status = 'fulfilled'
            state.cars = action.payload
        },
        [getAllCars.rejected]: (state,action)=> {
            state.status = 'rejected'
            state.error = action.payload
        }

    }
});

export const {addCar, deleteCar} = carSlice.actions;
const carReducer = carSlice.reducer;
export default carReducer;