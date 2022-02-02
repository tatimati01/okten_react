import React from 'react';

import Dog from "../Dog/Dog";
import css from '../../App.module.css';

const Dogs = ({dogs, dispatch}) => {
    return (
        <div className={css.petBlock}>
            {dogs.map(dog=> <Dog key={dog.id} dog={dog} dispatch={dispatch}/>)}
        </div>
    );
};

export default Dogs;