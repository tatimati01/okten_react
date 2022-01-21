import React from 'react';

import css from "../../App.module.css";

const Car = ({car}) => {
    const {id, model, price, year} = car;

    return (
        <div className={css.carCard}>
            <h3>Id: {id}</h3>
            <h1>Model: {model}</h1>
            <h2>Year: {year}</h2>
            <h2>Price: {price}</h2>
        </div>
    );
};

export default Car;