import React from 'react';

import Cat from "../Cat/Cat";
import css from '../../App.module.css';

const Cats = ({cats, dispatch}) => {
    return (
        <div className={css.petBlock}>
            {cats.map(cat => <Cat key={cat.id} cat={cat} dispatch={dispatch}/>)}
        </div>
    );
};

export default Cats;