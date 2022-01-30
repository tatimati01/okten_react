import React, {useReducer} from 'react';

import css from './Counter.module.css';
import reducer from "../../helpers/reducer";

const Counter = () => {

    let [state, dispatch] = useReducer(reducer, {counter1: 0, counter2: 0, counter3: 0});

    return (
        <div className={css.countersWrapper}>
            <div className={css.counterBox}>
                <h2>{state.counter1}</h2>
                <button onClick={()=> dispatch({type: 'inc1'})}>INC</button>
                <button onClick={()=> dispatch({type: 'dec1'})}>DEC</button>
                <button onClick={()=> dispatch({type: 'reset1'})}>RESET</button>
            </div>
            <div className={css.counterBox}>
                <h2>{state.counter2}</h2>
                <button onClick={()=> dispatch({type: 'inc2'})}>INC</button>
                <button onClick={()=> dispatch({type: 'dec2'})}>DEC</button>
                <button onClick={()=> dispatch({type: 'reset2'})}>RESET</button>
            </div>
            <div className={css.counterBox}>
                <h2>{state.counter3}</h2>
                <button onClick={()=> dispatch({type: 'inc3'})}>INC</button>
                <button onClick={()=> dispatch({type: 'dec3'})}>DEC</button>
                <button onClick={()=> dispatch({type: 'reset3'})}>RESET</button>
            </div>
        </div>
    );
};

export default Counter;