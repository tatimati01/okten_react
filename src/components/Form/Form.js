import React, {useState} from 'react';

import css from "../../App.module.css";
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";

const Form = () => {
    const [formError, setFormError] = useState({});

    const {register, handleSubmit, watch, formState: {errors}} = useForm();

    const submit = (car) => {
        carService.create(car).then(value => console.log(value)).catch(error => {
            setFormError(error.response.data)
        })
    }

    return (
        <div className={css.formWrapper}>
            <form onSubmit={handleSubmit(submit)}>
                <div className={css.formItem}>
                    <label>Model:</label>
                    <input type='text' {...register('model')} defaultValue={''}/>
                    {formError.model && <span>{formError.model[0]}</span>}
                </div>
                <div className={css.formItem}>
                    <label>Year:</label>
                    <input type='text' {...register('year')} defaultValue={''}/>
                    {formError.year && <span>{formError.year[0]}</span>}
                </div>
                <div className={css.formItem}>
                    <label>Price:</label>
                    <input type='text' {...register('price')} defaultValue={''}/>
                    {formError.price && <span>{formError.price[0]}</span>}
                </div>
                <button>Save</button>
            </form>
        </div>
    );
};

export default Form;