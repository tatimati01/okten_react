import React from 'react';

import css from '../../App.module.css';

const Dog = ({dog, dispatch}) => {

    const {id,name} = dog;

    return (
        <div className={css.petItem}>
            {name}
            <button onClick={()=>dispatch({type: 'deleteDog', payload:{id}})}>Delete</button>
        </div>
    );
};

export default Dog;