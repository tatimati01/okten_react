import React, {useEffect, useState} from 'react';

import {carService} from "../../services/car.service";
import Car from "../Car/Car";
import css from "../../App.module.css";

const Cars = ({car, update, setUpdateCar}) => {
    const [cars,setCars] = useState([]);

    useEffect(()=> {
        carService.getAll().then(value=> setCars([...value]))
    },[car])

    return (
        <div className={css.carsWrapper}>
            {cars.map(car => <Car key={car.id} car={car} update={update} updateCar={setUpdateCar}/>)}
        </div>
    );
};

export default Cars;