import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import css from '../../App.module.css'
import {addCar, updateCarById} from "../../store";

const Form = () => {
    const {handleSubmit, register, reset, setValue} = useForm();

    let {carForUpdate} = useSelector(state => state['carReducer']);

    const dispatch = useDispatch();

    const submitForm = (data) => {
        if (carForUpdate) {
            dispatch(updateCarById({id:carForUpdate.id, car:data}))
        } else {
            dispatch(addCar({data}));
        }
        reset()
    }

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate, setValue])

    return (
        <div className={css.formWrapper}>
            <form onSubmit={handleSubmit(submitForm)}>
                <label>Model:<input type="text" {...register('model')}/></label>
                <label>Price:<input type="text" {...register('price')}/></label>
                <label>Year:<input type="text" {...register('year')}/></label>
                <button>{carForUpdate ? 'Update' : 'Create'}</button>
            </form>

        </div>
    );
};

export default Form;