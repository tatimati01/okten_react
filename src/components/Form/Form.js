import React from 'react';

import css from "../../App.module.css";
import {useForm} from "react-hook-form";

const Form = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();

    const submit = (data) => {
        console.log(data);
    }

    return (
        <div className={css.formWrapper}>
            <form onSubmit={handleSubmit(submit)}>
                <div className={css.formItem}>
                    <label>Model:</label>
                    <input type='text' {...register('model')} defaultValue={''}/>
                </div>
                <div className={css.formItem}>
                    <label>Year:</label>
                    <input type='text' {...register('year')} defaultValue={''}/>
                </div>
                <div className={css.formItem}>
                    <label>Price:</label>
                    <input type='text' {...register('price')} defaultValue={''}/>
                </div>
                <button>Save</button>
            </form>
        </div>
    );
};

export default Form;