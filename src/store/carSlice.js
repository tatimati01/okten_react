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

export const updateCarById = createAsyncThunk(
    'carSlice/updateCarById',
    async ({id, car}, {dispatch})=> {
        const newCar = await carService.updateById(id, car);
        dispatch(updateCar({car: newCar}))
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        status: null,
        error: null,
        carForUpdate: null
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
        },
        selectedCarForUpdate: (state,action)=> {
            state.carForUpdate = action.payload.car
        },
        updateCar: (state,action)=> {
            const index = state.cars.findIndex(car=>car.id === action.payload.car.id);
            state.cars[index] = action.payload.car
            state.carForUpdate = null
        }
    },
    extraReducers: {
        [getAllCars.pending]: (state)=> {
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

export const {addCar, deleteCar, updateCar, selectedCarForUpdate} = carSlice.actions;
const carReducer = carSlice.reducer;
export default carReducer;