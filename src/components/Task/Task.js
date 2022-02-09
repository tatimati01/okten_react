import React from 'react';
import {useDispatch} from "react-redux";

import css from "../../App.module.css";
import {completeTheTask, deleteTask} from "../../store";

const Task = ({task}) => {
    const {id,value,status} = task;
    
    const dispatch = useDispatch();

    return (
        <div className={css.taskStyle}>
            <input type="checkbox" value={status} onChange={()=>dispatch(completeTheTask({id}))}/>
            <h3 className={status? css.completedTask : ''}>{value}</h3>
            <button onClick={()=>dispatch(deleteTask({id}))}>Delete</button>
        </div>
    );
};

export default Task;