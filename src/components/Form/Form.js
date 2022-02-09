import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {addTask} from "../../store";
import css from '../../App.module.css'

const Form = () => {

    const dispatch = useDispatch();

    const {countNew,countDone} = useSelector(state => state.taskReducer);

    const submit = (e) => {
        e.preventDefault()
        dispatch(addTask({task: e.target.task.value, countNew: +1}))
        e.target.reset()
    }

    return (
        <div className={css.formStyle}>
            <form onSubmit={submit}>
                <div className={css.counters}>
                    <h3>All tasks: {countNew}</h3>
                    <h3>Completed: {countDone}</h3>
                </div>
                <input type="text" name={'task'}/>
                <button>Save</button>
            </form>
        </div>
    );
}


export default Form;