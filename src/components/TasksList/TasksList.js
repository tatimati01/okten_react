import React from 'react';
import {useSelector} from "react-redux";

import Task from "../Task/Task";
import css from '../../App.module.css'

const TasksList = () => {
    const {tasks} = useSelector(state => state.taskReducer);

    return (
        <div className={css.taskListStyle}>
            {tasks.map(task=> <Task key={task.id} task={task}/>)}
        </div>
    );
};

export default TasksList;