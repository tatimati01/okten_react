import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import css from '../../App.module.css'
import {addCar} from "../../store/carSlice";

const Form = () => {
    const {handleSubmit, register, reset} = useForm();

    const dispatch = useDispatch();

    const submitForm = (data) => {
        dispatch(addCar({data}));
        reset()
    }

    return (
        <div className={css.formWrapper}>
            <form onSubmit={handleSubmit(submitForm)}>
                <label>Model:<input type="text" {...register('model')}/></label>
                <label>Price:<input type="text" {...register('price')}/></label>
                <label>Year:<input type="text" {...register('year')}/></label>
                <button>Save</button>
            </form>

        </div>
    );
};

export default Form;