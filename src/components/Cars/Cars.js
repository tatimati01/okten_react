import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Car from "../Car/Car";
import css from '../../App.module.css'
import {getAllCars} from "../../store/carSlice";

const Cars = () => {
    const {cars, status, error} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getAllCars())
    },[dispatch]);

    return (
        <div className={css.carsWrapper}>
            {status === 'pending' && <h2>Loading...</h2>}
            {error&& <h2>{error}</h2>}
            {cars.map(car=> <Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;