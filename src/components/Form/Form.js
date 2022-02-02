import React, {useRef} from 'react';

import css from '../../App.module.css'

const Form = ({dispatch}) => {

    let catInput = useRef();

    let dogInput = useRef();

    const petSaver = (e) => {
        e.preventDefault();
        e.target.reset()
    }

    const saveCat = () => {
        dispatch({type: 'addCat', payload: {cat: catInput.current.value}})
    }

    const saveDog = () => {
        dispatch({type: 'addDog', payload: {dog: dogInput.current.value}})
    }

    return (
        <div className={css.formContainer}>
            <form onSubmit={petSaver}>
                <label>Add cat</label>
                <input type="text" defaultValue={''} ref={catInput}/>
                <button onClick={saveCat}>Save</button>
                <label>Add dog</label>
                <input type="text" defaultValue={''} ref={dogInput}/>
                <button onClick={saveDog}>Save</button>
            </form>
        </div>
    );
};

export default Form;