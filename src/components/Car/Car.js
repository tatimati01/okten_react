import React from 'react';

import css from "../../App.module.css";
import {carService} from "../../services/car.service";

const Car = ({car, update, updateCar}) => {
    const {id, model, price, year} = car;

    const deleteCar = async () => {
      await carService.deleteById(id);
      update({})
    }

    return (
        <div className={css.carCard}>
            <div>
                <h3>Id: {id}</h3>
                <h1>Model: {model}</h1>
                <h2>Year: {year}</h2>
                <h2>Price: {price}</h2>
            </div>
            <div className={css.btnWrapper}>
                <button onClick={()=>updateCar(car)}>Update</button>
                <button onClick={()=>deleteCar()}>Delete</button>
            </div>
        </div>
    );
};

export default Car;