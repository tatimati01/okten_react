import React from 'react';

import css from '../../App.module.css'

const Form = (dispatch) => {



    return (
        <div className={css.formContainer}>
            <form>
                <label>Add cat</label>
                <input type="text"/>
                <button onClick={()=> dispatch({type: 'dog'})}>Save</button>
            </form>
            <form>
                <label>Add dog</label>
                <input type="text"/>
                <button onClick={()=> dispatch({type: 'dog'})}>Save</button>
            </form>
        </div>
    );
};

export default Form;