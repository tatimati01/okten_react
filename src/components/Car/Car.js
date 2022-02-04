import React from 'react';
import {useDispatch} from "react-redux";

import {deleteCar} from "../../store/carSlice";
import css from '../../App.module.css'

const Car = ({car}) => {
    const {id,model,year,price} = car;
    const dispatch = useDispatch();

    return (
        <div className={css.carStyle}>
            <div> Model: {model}</div>
            <div>Year: {year}</div>
            <div>Price: {price}</div>
            <button onClick={()=>dispatch(deleteCar({id}))}>Delete</button>
        </div>
    );
};

export default Car;