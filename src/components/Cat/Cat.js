import React from 'react';

import css from '../../App.module.css';

const Cat = ({cat, dispatch}) => {

    const {id,name} = cat;

    return (
        <div className={css.petItem}>
            {name}
            <button onClick={()=>dispatch({type: 'deleteCat', payload:{id}})}>Delete</button>
        </div>
    );
};

export default Cat;