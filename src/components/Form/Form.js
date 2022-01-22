import React, {useState} from 'react';
import {joiResolver} from "@hookform/resolvers/joi";
import {useForm} from "react-hook-form";

import css from "../../App.module.css";
import {carService} from "../../services/car.service";
import {CarValidator} from "../../validators/car.validator";

const Form = ({setNewCar}) => {
    const [formError, setFormError] = useState({});

    const {register, handleSubmit, watch, formState: {errors}} = useForm({
        resolver:joiResolver(CarValidator), mode: "onTouched"
    });

    const submit = (car) => {
        carService.create(car).then(value => setNewCar(value)).catch(error => {
            setFormError(error.response.data)
        })
    }

    return (
        <div className={css.formWrapper}>
            <form onSubmit={handleSubmit(submit)}>
                <div className={css.formItem}>
                    <label>Model:</label>
                    <input type='text' {...register('model')} defaultValue={''}/>
                    {errors.model && <span>{errors.model.message}</span>}
                </div>
                <div className={css.formItem}>
                    <label>Year:</label>
                    <input type='text' {...register('year')} defaultValue={''}/>
                    {errors.year && <span>{errors.year.message}</span>}
                </div>
                <div className={css.formItem}>
                    <label>Price:</label>
                    <input type='text' {...register('price')} defaultValue={''}/>
                    {errors.price && <span>{errors.price.message}</span>}
                </div>
                <button>Save</button>
            </form>
        </div>
    );
};

export default Form;