import React, {useEffect, useState} from 'react';
import {joiResolver} from "@hookform/resolvers/joi";
import {useForm} from "react-hook-form";

import css from "../../App.module.css";
import {carService} from "../../services/car.service";
import {CarValidator} from "../../validators/car.validator";

const Form = ({update, updateCar: {id, model, year, price}}) => {

    let [formError, setFormError] = useState(null);

    const {register, handleSubmit, formState: {errors}, setValue} = useForm({
        resolver: joiResolver(CarValidator), mode: "onTouched"
    });

    const submit = async (car) => {
        try {
            let newCar;
            if (id) {
                newCar = await carService.updateById(id, car);
            } else {
                newCar = await carService.create(car);
            }
            update(newCar)
        } catch (error) {
            setFormError(error.response.data)
        }
    }

    useEffect(() => {
        setValue('model', model)
        setValue('year', year)
        setValue('price', price)
    }, [model, year, price, setValue])
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
                <button>{id ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
};

export default Form;